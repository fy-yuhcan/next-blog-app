import { resolve } from "path";
import { Article } from "./types";
import { notFound } from "next/navigation";

export const getAllArticles = async (): Promise<Article[]>=>{
    const res = await fetch(`http://localhost:3001/posts`,{cache: "no-store"}) //SSR

    if(!res.ok){
    throw new Error("エラーが出ています")}
    await new Promise((resolve)=>setTimeout(resolve,1500))
    const articles = await res.json()
    return articles;
}
export const getDetailArticles = async (id: string): Promise<Article>=>{
    const res = await fetch(`http://localhost:3001/posts/${id}`,{next: {revalidate: 60}}) //ISR

    if(res.status === 404){
        notFound()
    }

    if(!res.ok){
    throw new Error("エラーが出ています")}
    await new Promise((resolve)=>setTimeout(resolve,1000))
    const article = await res.json()
    return article;
}
export const createArticles = async (id: string,title:string,content:string): Promise<Article>=>{
    const currentDateTime = new Date().toISOString()
    const res = await fetch(`http://localhost:3001/posts`,{method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({id,title,content,createdAt: currentDateTime})}) 

    if(!res.ok){
    throw new Error("エラーが出ています")}
    await new Promise((resolve)=>setTimeout(resolve,1000))
    const newArticle = await res.json()
    return newArticle;
}
export const deleteArticles = async (id: string): Promise<Article>=>{
    const currentDateTime = new Date().toISOString()
    const res = await fetch(`http://localhost:3001/posts/${id}`,{method: "DELETE"}) 

    if(!res.ok){
    throw new Error("エラーが出ています")}
    await new Promise((resolve)=>setTimeout(resolve,1000))
    const deleteArticle = await res.json()
    return deleteArticle;
}
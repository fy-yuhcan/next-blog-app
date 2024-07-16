import DeleteButton from '@/app/components/DeleteButton'
import { getDetailArticles } from '@/blogAPI'
import Image from 'next/image'
import React from 'react'


const Article = async({ params }: {params:{id:string}}) => {
    //const detailArticle = await getDetailArticles(params.id)
  const API_URL=process.env.NEXT_PUBLIC_API_URL
  const res = await fetch(`${API_URL}/api/${params.id}`,{next: {revalidate: 10}})
  const detailArticle =await res.json()
  return (
    <div className='max-w-3xl mx-auto p-5'>
    <Image src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='' width={1280} height={100} />
    <h1 className='text-4xl text-center mb-10 mt-10'>{detailArticle.title}</h1>
    <div className='text-lg leading-relaxed text-justify'>
        <p>{detailArticle.content}</p>
    </div>
    <div className='text-right mt-3'>
    <DeleteButton id={detailArticle.id}/>
    </div>
    </div>
  )
}

export default Article

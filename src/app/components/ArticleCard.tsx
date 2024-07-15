import { Article } from '@/types'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type ArticleCardProps ={
    article: Article;
}

const ArticleCard = ({article}:ArticleCardProps) => {
  return (
    <div>
      <article className='shadow my-4 flex flex-col' key={article.id}>
            <Link href={`articles/${article.id}`} className='hover: opacity-75'>
            <Image src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='' width={1280} height={100} />
            </Link>
            <div className='bg-white flex flex-col justify-start p-6'>
                <Link href={`articles/${article.id}`} className='text-blue-700 pd-4 font-bold'>Techology</Link>
                <Link href={`articles/${article.id}`} className='text-slate-900 text-3xl hover:text-gray-700'>{article.title}</Link>
                <p className='text-sm bd-3 text-slate-900'>by next,{article.createdAt}</p>
                <Link href={`articles/${article.id}`} className='text-slate-900 pd-6'>
                    {article.content.length > 70 ? article.content.substring(0,70) : article.content}
                </Link>
                <Link href={`articles/${article.id}`}>
                    続きを読む
                </Link>
            </div>
          </article>
    </div>
  )
}

export default ArticleCard

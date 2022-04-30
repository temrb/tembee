import React from 'react'
import { Post } from '../types'
import Link from 'next/link'
import { urlFor } from '../sanity'

interface Props {
  posts: [Post]
}

const Posts = ({ posts }: Props) => {
  return (
    <div className="grid-col-1 grid gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3 ">
      {posts.map((post) => (
        <Link key={post._id} href={`/post/${post.slug.current}`}>
          <div className="group cursor-pointer overflow-hidden rounded-lg border shadow-lg">
            <img
              className="object-full h-60 w-full transition-transform duration-200 ease-in-out group-hover:scale-105"
              src={urlFor(post.mainImage).url()}
              alt=""
              loading="lazy"
            />
            <div className="flex justify-between gap-4 bg-white p-5">
              <div>
                <p className="text-lg font-bold">{post.title}</p>
                <p className="text-xs">{post.description}</p>
                <p className="text-xs font-semibold text-color-secondary">
                  by {post.author.name}
                </p>
              </div>
              <img
                className="h-12 w-12 rounded-full "
                src={urlFor(post.author.image).url()!}
                alt=""
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Posts

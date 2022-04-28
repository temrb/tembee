import { GetStaticProps } from 'next'
import React, { useState } from 'react'
import Header from '../../components/header'
import { sanityClient, urlFor } from '../../sanity'
import { Post } from '../../types'
import PortableText from 'react-portable-text'
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
  _id: string
  name: string
  email: string
  comment: string
}

interface Props {
  post: Post
}

const PostSlug = ({ post }: Props) => {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data)
        setSubmitted(true)
      })
      .catch((err) => {
        console.log(err)
        setSubmitted(false)
      })
  }

  return (
    <main>
      <Header />
      <img
        className="h-40 w-full object-cover"
        src={urlFor(post.mainImage).url()!}
        alt=""
      />

      <article className="mx-auto max-w-3xl p-5">
        <h1 className="mt-10 mb-3 text-3xl">{post.title}</h1>
        <h2 className="mb-2 text-xl font-light text-gray-500">
          {post.description}
        </h2>
        <div className="flex items-center space-x-2">
          <img
            className="h-10 w-10 rounded-full"
            src={urlFor(post.author.image).url()!}
            alt=""
          />
          <p className="text-sm font-extralight">
            Post by{' '}
            <span className="text-color-secondary">{post.author.name}</span> -
            Published at {new Date(post._createdAt).toLocaleDateString()}
          </p>
        </div>

        <div className="mt-10">
          <PortableText
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            content={post.body}
            className=""
            serializers={{
              h1: (props: any) => (
                <h1 className="my-5 text-2xl font-bold" {...props} />
              ),
              h2: (props: any) => (
                <h2 className="my-5 text-xl font-bold" {...props} />
              ),
              h3: (props: any) => (
                <h3 className="my-5 text-lg font-bold" {...props} />
              ),
              h4: (props: any) => (
                <h4 className="text-md my-5 font-bold" {...props} />
              ),
              li: ({ children }: any) => (
                <li className="ml-4 list-disc">{children}</li>
              ),
              link: ({ href, children }: any) => (
                <Link href={href}>
                  <a className="text-color-secondary hover:underline">
                    {children}
                  </a>
                </Link>
              ),
              image: ({ asset, alt, caption }: any) => (
                <img
                  className="my-5"
                  src={urlFor(asset).url()!}
                  alt={alt}
                  title={caption}
                />
              ),
            }}
          />
        </div>

        <hr className="max-w-lf my-5 mx-auto border border-color-secondary" />

        {submitted ? (
          <div className="my-10 mx-auto flex max-w-2xl flex-col rounded-xl bg-color-primary py-10 text-center text-white">
            <h3 className="mb-5 text-3xl font-bold">Comment submitted! 👍</h3>
            <p className="text-sm">
              Once it has been approved, it will appear on the site.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto mb-10 flex max-w-2xl flex-col p-5 "
          >
            <h3 className="text-sm text-color-secondary">
              Enjoyed the article?
            </h3>
            <h3 className="text-3xl font-bold">Leave a comment below!</h3>
            <hr className="mt-2 py-3" />

            <input
              {...register('_id')}
              type="hidden"
              name="_id"
              value={post._id}
            />

            <label className="mb-5 block">
              <div className="grid grid-cols-3">
                <span className="text-gray-700">Name</span>
                <div className="col-span-2">
                  {errors.name && (
                    <p className=" duration-600 grid justify-items-end text-sm font-light italic text-red-500  transition-all ease-in-out">
                      Name is required
                    </p>
                  )}
                </div>
              </div>
              <input
                {...register('name', { required: true })}
                placeholder="tem"
                type="text"
                className="form-input duration-600 mt-1 block w-full rounded border bg-bg py-2 px-3 shadow outline-none ring-color-primary transition-all  ease-in-out focus:ring"
              />
            </label>
            <label className="mb-5 block">
              <div className="grid grid-cols-3">
                <span className="text-gray-700">Email</span>
                <div className="col-span-2">
                  {errors.email && (
                    <p className="duration-600 grid justify-items-end text-sm font-light italic text-red-500  transition-all ease-in-out">
                      Email is required
                    </p>
                  )}
                </div>
              </div>
              <input
                {...register('email', { required: true })}
                placeholder="tem@bee.com"
                type="email"
                className="form-input duration-600 mt-1 block w-full rounded border bg-bg py-2 px-3 shadow outline-none ring-color-primary transition-all  ease-in-out focus:ring"
              />
            </label>
            <label className="mb-5 block ">
              <div className="grid grid-cols-3">
                <span className="text-gray-700">Comment</span>
                <div className="col-span-2">
                  {errors.comment && (
                    <p className=" duration-600 grid justify-items-end text-sm font-light italic text-red-500  transition-all ease-in-out">
                      Comment is required
                    </p>
                  )}
                </div>
              </div>
              <textarea
                {...register('comment', { required: true })}
                placeholder="some cool comment"
                rows={8}
                className="form-textarea duration-600 mt-1 block w-full rounded border bg-bg  py-2 px-3 shadow outline-none ring-color-primary  transition-all ease-in-out focus:ring"
              />
            </label>

            <input
              type="submit"
              className="focus:shadow-outline duration-600 cursor-pointer rounded bg-color-primary/70 py-2 px-4 font-bold text-white shadow transition-colors ease-in-out hover:bg-color-primary focus:outline-none"
            />
          </form>
        )}

        {/* comments */}
        <div className="my-10 mx-auto flex max-w-2xl flex-col space-y-2 p-10 shadow-md shadow-color-primary">
          <h3 className="text-4xl">Comments</h3>
          <hr className="pb-2" />
          {post.comments.map((comment) => (
            <div>
              <p>
                <span className="text-color-secondary">{comment.name}</span>:{' '}
                {comment.comment}
              </p>
            </div>
          ))}
        </div>
      </article>
    </main>
  )
}

export default PostSlug

export const getStaticPaths = async () => {
  const query = `*[_type =='post']{
  _id,
  slug{
  current
}
}`

  const posts = await sanityClient.fetch(query)

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type =='post' && slug.current == $slug][0]{
  _id,
  _createdAt,
  title,
  author->{
  name,
  image
},
'comments': *[
  _type =='comment'
  && post._ref == ^._id 
  && approved == true
],
description,
mainImage,
slug,
body
}`

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 300, // after 5mins, update the old cached version
  }
}

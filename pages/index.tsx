import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import Header from '../components/header'
import Link from 'next/link'
import Posts from '../components/posts'
import { Post } from '../types'
import { sanityClient } from '../sanity'
interface Props {
  posts: [Post]
}

export default function Home({ posts }: Props) {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>tembee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <Posts posts={posts} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type =='post']{
  _id,
  title,
  slug,
  author -> {
  name,
  image
},
description,
mainImage,
slug
}`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}

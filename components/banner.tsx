import React from 'react'

const Banner = () => {
  return (
    <main className="flex items-center justify-between bg-color-primary py-10">
      <div className="space-y-5 px-10">
        <h1 className="max-w-xl text-5xl font-semibold text-white">
          discover interesting ideas, tools, and products with{' '}
          <span className=" text-color-secondary decoration-4">tembee.</span>
        </h1>
        <h2 className="text-white">
          new posts every day, curated by{' '}
          <span className="text-color-secondary ">test</span>.
        </h2>
      </div>

      <div className="h32 hidden md:inline-flex lg:h-full"></div>
    </main>
  )
}

export default Banner

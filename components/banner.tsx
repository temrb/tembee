import React from 'react'

const Banner = () => {
  return (
    <main className="flex justify-start">
      <div className="flex w-fit items-center justify-between bg-color-primary py-10 sm:rounded-lg">
        <div className="flex items-center gap-6 space-y-3 px-10">
          <h1 className="max-w-xl text-left text-4xl font-semibold text-bg">
            posting about interesting ideas, tools, and products
          </h1>
        </div>
      </div>
    </main>
  )
}

export default Banner

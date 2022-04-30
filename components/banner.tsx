import React from 'react'

const Banner = () => {
  return (
    <main className="flex justify-center">
      <div className="flex w-fit items-center justify-between bg-color-primary py-10 sm:rounded-lg">
        <div className="flex items-center space-y-3 gap-6 px-10">
          <div className="animate-bounce text-4xl">🚀</div>
          <h1 className="max-w-xl text-center text-4xl font-semibold text-bg">
            discover interesting ideas, tools, and products
          </h1>
          <div className="animate-bounce text-4xl">🚀</div>
        </div>
      </div>
    </main>
  )
}

export default Banner

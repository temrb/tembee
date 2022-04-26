import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto'>
      <div className="flex items-center space-x-5">
        <Link href="/">
          <div className="cursor-pointer !font-SuezOne text-color-primary text-xl">tembee</div>
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3>about</h3>
          <h3>contact</h3>
          <h3 className="rounded-full bg-color-secondary px-4 py-1 text-white">
            follow
          </h3>
        </div>
      </div>

      <div className='flex items-center space-x-5 text-color-secondary'>
        <h3>sign in</h3>
        <h3 className='border px-4 py-1 rounded-full border-color-secondary'>get started</h3>
      </div>
    </header>
  )
}

export default Header

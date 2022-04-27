import Link from 'next/link'
import React from 'react'

const subscribeHandler = () => {
  console.log('subscribe')
}

const Header = () => {
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <div className="cursor-pointer !font-SuezOne text-xl text-color-primary">
            tembee
          </div>
        </Link>
      </div>
      <div className="hidden items-center space-x-5 md:inline-flex">
        <h3 className="cursor-pointer">contact</h3>
        <h3
          className="cursor-pointer rounded-full bg-color-secondary px-4 py-1 text-white"
          onClick={subscribeHandler}
        >
          subscribe
        </h3>
      </div>

      {/* <div className='flex items-center space-x-5 text-color-secondary'>
        <h3>sign in</h3>
        <h3 className='border px-4 py-1 rounded-full border-color-secondary'>get started</h3>
      </div> */}
    </header>
  )
}

export default Header

import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5 !font-SuezOne">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <div className="cursor-pointer text-xl text-color-primary">
            tembee
          </div>
        </Link>
      </div>
      <div className="inline-flex items-center space-x-5">
        <Link href="https://www.tiktok.com/@tembee.app">
          <div className="text-l cursor-pointer rounded-full bg-color-primary py-1 px-3 text-color-secondary">
            tiktok
          </div>
        </Link>
        <Link href="https://www.instagram.com/tembee.app/">
          <div className="text-l cursor-pointer rounded-full bg-color-primary py-1 px-3 text-color-secondary">
            insta
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header

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
      <div className="inline-flex items-center space-x-3">
        <Link href="https://www.tiktok.com/@temr_b">
          <div className="text-m cursor-pointer text-color-secondary">
            tiktok
          </div>
        </Link>
        {/* <Link href="https://www.instagram.com/imtembee/">
          <div className="text-m cursor-pointer text-color-secondary">
            insta
          </div>
        </Link> */}
      </div>
    </header>
  )
}

export default Header

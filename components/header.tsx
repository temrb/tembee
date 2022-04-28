import Link from 'next/link'
import React from 'react'

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
    </header>
  )
}

export default Header

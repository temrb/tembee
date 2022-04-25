import React from 'react'

interface Props {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return <div className="bg-bg min-h-screen font-Overpass">{children}</div>
}

export default Layout

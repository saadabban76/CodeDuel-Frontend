

import React from 'react'
import Nav from './Nav'
import Workspace from './Workspace'

const Problem = () => {
  return (
    <main className='w-full pb-4 dark relative bg-gradient-to-br from-[#0F1522] to-background 
    text-foreground min-h-screen'>
      <Nav />
      <Workspace />
    </main>
  )
}

export default Problem
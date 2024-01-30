import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
      <div className='w-full p-4 px-4 text-gray-400 bg-black/90'>
          <div className='py-2 flex justify-between items-center'>
              {/* copyright */}
              <h2>Copyright &copy; 2024 Code Duel</h2>
              {/* right Side */}
              <div className='flex items-center space-x-4'>
                  <Link href='/help' >Help</Link>
                  <Link href='/discord' >Discord</Link>
                  <Link href='/instagram' >Instagram</Link>
                  <Link href='/Github' >Github</Link>
              </div>
          </div>
    </div>
  )
}

export default Footer
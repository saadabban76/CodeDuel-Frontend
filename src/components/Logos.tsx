import Image from 'next/image'
import React from 'react'

const Logos = () => {
  return (
      <div className='py-10 w-full flex justify-center bg-black/20 items-center'>
          <div className='flex items-center space-x-32'>
              <Image
                  src='/assets/solana.png'
                  alt='Solana'
                  width="0"
                  height="0"
                  sizes="100vw"
                  className='w-[80px]'
              />
              <Image
                  src='/assets/encode.jpg'
                  alt='Solana'
                  width="0"
                  height="0"
                  sizes="100vw"
                  className='w-[80px] rounded-full'
              />
        </div>
    </div>
  )
}

export default Logos
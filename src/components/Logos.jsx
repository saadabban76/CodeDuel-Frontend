import React from 'react'

const Logos = () => {
  return (
      <div className='py-10 w-full flex justify-center bg-black/20 items-center'>
          <div className='flex items-center space-x-32'>
              <img
                  src='/assets/solana.png'
                  alt='Solana'
                  className='w-[80px]'
              />
              <img
                  src='/assets/encode.jpg'
                  alt='Solana'
                  className='w-[80px] rounded-full'
              />
        </div>
    </div>
  )
}

export default Logos
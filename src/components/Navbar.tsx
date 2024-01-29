import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button';

const Navbar = () => {
    const userId = '23423';
    return (
        <div className='px-5 w-full py-4'>
            <main className='flex items-center justify-between'>
                {/* Logo */}
                <div className='w-full h-full'>
                    <Image
                        src='/assets/logo.png'
                        alt='Code Duel'
                        layout="intrinsic"
                        width="100"
                        height="100"
                        className='w-[180px] h-[100%]'
                    />
                </div>
                {/* right side */}
                {userId ? (
                    <div className='flex items-center space-x-4'>
                        <p className='text-gray-400'>{userId}</p>
                        <Button className='bg-red-500 text-foreground hover:bg-black'>
                            Logout
                        </Button>
                    </div>
                ) : (
                    <div className=''>
                        <Button className=''>
                            Login
                        </Button>
                    </div>
                )}
            </main>
        </div>
    )
}

export default Navbar
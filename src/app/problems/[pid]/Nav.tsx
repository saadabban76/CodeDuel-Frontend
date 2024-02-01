"use client";

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowLeft, ChevronLeft, ChevronRight, MoveLeft, User } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Nav = () => {
    const router = useRouter();
    const loginHandler = () => {
        router.push("/login");
    }
    const userId = 'sfdsd';
    return (
        <nav className='sticky inset-x-0 bg-background pz-2 py-3 px-6'>
            <main className='flex items-center justify-between '>
                {/* Logo */}
                <div className='flex items-center space-x-4 w-full h-full'>
                    <Image
                        onClick={() => router.push('/')}
                        src='/assets/logo.png'
                        alt='Code Duel'
                        layout="intrinsic"
                        width="100"
                        height="100"
                        className='w-[180px] h-[100%] cursor-pointer'
                    />

                    {/* prev and next problem buttons */}
                    <div className='pl-4 text-lg flex space-x-2 items-center text-foreground'>
                        <ChevronLeft className='cursor-pointer' size={28} />
                        <span className='text-second text-sm'>{"Problem 1"}</span>
                        <ChevronRight className='cursor-pointer' size={28} />
                    </div>
                </div>
                {/* right side */}
                <div className='flex items-center space-x-4'>
                    <p className='text-gray-400'>{userId}</p>
                    <User className='text-white' size={28} />
                    {/* <Button variant='link' className='bg-red-500  text-foreground hover:bg-black'>
                        Logout
                    </Button> */}
                </div>
            </main>
        </nav>
    )
}

export default Nav
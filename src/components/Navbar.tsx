"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const userId = '23423';
    const router = useRouter();
    const userState = JSON.parse(localStorage.getItem('user') || '{}');
    const [user, setUser] = useState<any>();

    const loginHandler = () => {
        router.push("/login");
    }
    
    const logoutHandler = () => {
        localStorage.removeItem('user');
        window.location.reload();
    }

    useEffect(() => {
        setUser(userState);
    }, []);

    return (
        <div className='px-5 w-full py-4'>
            <main className='flex items-center justify-between text-white'>
                {/* Logo */}
                <div className='w-full h-full'>
                    <Image
                        onClick={() => router.push('/')}
                        src='/assets/logo.png'
                        alt='Code Duel'
                        layout="intrinsic"
                        width="100"
                        height="100"
                        className='w-[180px] h-[100%] cursor-pointer'
                    />
                </div>
                {/* right side */}
                {user && user.user ? (
                    <div className='flex items-center space-x-4'>
                        <p className='text-gray-300'>{user.user.email}</p>
                        <Button
                            onClick={logoutHandler}
                            className='bg-red-500  text-foreground hover:bg-black'>
                            Logout
                        </Button>
                    </div>
                ) : (
                    <div className=''>
                        <Button
                            onClick={loginHandler}
                            className='px-10 py-2'>
                            Login
                        </Button>
                    </div>
                )}
            </main>
        </div>
    )
}

export default Navbar
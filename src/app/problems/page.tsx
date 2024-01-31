"use client"

import Image from 'next/image'
import React from 'react'
import { Button, buttonVariants } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Link from 'next/link';
import ProblemsContainer from './ProblemsContainer';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const Navbar = () => {
    const userId = '23423';
    const router = useRouter();

    const loginHandler = () => {
        router.push("/login");
    }

    return (
        <main className='w-full pb-4 dark relative bg-gradient-to-br from-[#0F1522] to-background min-h-screen'>
            <nav className='sticky inset-x-0 bg-secondary pz-2 py-3'>
                <MaxWidthWrapper className=''>
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

                            <Link href='/contest'
                                className={buttonVariants({
                                    variant: 'link',
                                    className: 'text-sm text-second'
                                })}  >Contest</Link>
                            <Link href='/contest'
                                className={buttonVariants({
                                    variant: 'link',
                                    className: 'text-sm text-second'
                                })}  >Feeds</Link>
                            <Link href='/contest'
                                className={buttonVariants({
                                    variant: 'link',
                                    className: 'text-sm text-second'
                                })}  >Discussions</Link>
                            <Link href='/contest'
                                className={buttonVariants({
                                    variant: 'link',
                                    className: 'text-sm text-second'
                                })}  >Contact Us</Link>
                        </div>
                        {/* right side */}
                        {!userId ? (
                            <div className='flex items-center space-x-4'>
                                <p className='text-gray-400'>{userId}</p>
                                <Button variant='link' className='bg-red-500  text-foreground hover:bg-black'>
                                    Logout
                                </Button>
                            </div>
                        ) : (
                            <div className=''>
                                <Button
                                    onClick={loginHandler}
                                    className='border-b border-primary
                                 px-10 py-2'>
                                    Login
                                </Button>
                            </div>
                        )}
                    </main>
                </MaxWidthWrapper >
            </nav>
            <ProblemsContainer />
            <Footer className={cn('absolute bottom-0')} />
        </main>

    )
}

export default Navbar
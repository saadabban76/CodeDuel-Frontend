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
import Nav from './Nav';

const Page = () => {
    return (
        <main className='w-full pb-4 dark relative bg-gradient-to-br from-[#0F1522] to-background min-h-screen'>
            <Nav />
            <ProblemsContainer />
            <Footer className={cn('absolute bottom-0')} />
        </main>

    )
}

export default Page
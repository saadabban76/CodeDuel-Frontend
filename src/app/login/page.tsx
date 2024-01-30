"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Link from 'next/link';

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/login', {
        email,
        password,
      });

      if (response.status === 200) {
        toast.success('Login successful');
        router.push('/dashboard');
      }
    } catch (error) {
      toast.error('Login failed');
    }
  };

  return (
    <main className='flex flex-col justify-between min-h-screen'>
      <div className="relative flex items-center justify-center flex-1 bg-black">
        <nav className='fixed w-full top-1 text-white flex justify-start px-5 p-6 border-b border-gray-800 '>
          <Image
            src='/assets/logo.png'
            alt='logo'
            height={150}
            width={150}
          />
        </nav>
        <div className="w-full max-w-md border border-gray-800 rounded-md p-10">
          <form onSubmit={handleSubmit} className="text-[#FACC15] shadow-md rounded-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#FACC15] text-center">Login</h2>
            <div className="mb-6">
              <label htmlFor="email" className="block text-white font-bold mb-2">
                Username or Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 w-full border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-10">
              <label htmlFor="password" className="block text-white font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/10 w-full border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
              >
                Sign In
              </button>
              <a href="/auth/forgot-password" className="text-[#FACC15] hover:underline">
                Forgot Password?
              </a>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-[#FACC15] hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <Toaster />
      </div>
      <Footer />
    </main>
  );
};

export default Page;
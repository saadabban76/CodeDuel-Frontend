import { Check } from 'lucide-react'
import React from 'react'

const Result = () => {
    return (
        <main className='w-full overflow-auto h-full relative bg-third'>
            <nav>
                <div className='flex w-full items-center bg-secondary text-white overflow-x-hidden border-b border-gray-500'>
                    <div className={"rounded-t-[5px] px-5 py-[10px] flex items-center text-sm cursor-pointer"}>
                        <Check className='text-green-500 mr-3' />  Result
                    </div>
                </div>
            </nav>
            <h2 className='text-red-400 text-[1.4rem] px-2 py-4'>{"Wrong Output :( "}</h2>
            <div className='flex flex-col p-3 text-gray-300 gap-4'>
                <h1 className='text-[1rem] border-b border-gray-400 text-white font-semibold'>Expected Result : </h1>
                <p>Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Aut, quia?</p>
            </div>
        </main>
    )
}

export default Result
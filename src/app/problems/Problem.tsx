import { buttonVariants } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type Prop = {
    id: number,
    title: string,
    fees: number,
    handleOpen: () => void,
    isOpen: boolean,
    isAnyOpen: boolean,
    description: string,
}

const Problem = ({ id, title, fees, description, isOpen, handleOpen }: Prop) => {
    const isEven = id % 2 === 0;
    return (
        <>
            <TableRow className={cn('  text-white h-16 relative border-none', { 'border-none': isOpen, 'bg-white/10': isEven })}>
                <TableCell className=''>{id}</TableCell>
                <TableCell>{title}</TableCell>
                <TableCell>{fees}</TableCell>
                <TableCell className=''>
                    <Link className={buttonVariants({
                        variant: 'link',
                    })} href='problem/1'>
                        Participate
                    </Link>
                    <ChevronDown className={cn('h-7 w-7 cursor-pointer hover:text-white float-right transition-all text-muted-foreground', {
                        "-rotate-180": isOpen,
                    })} onClick={handleOpen} />
                </TableCell>
            </TableRow>
            <TableRow className={cn('border-b-0 border-t border-gray-600 w-full bg-secondary text-gray-300', { hidden: !isOpen })}>
                <TableCell className='' colSpan={4}>
                    <span className='text-md text-second'>Problem Description : </span>
                    {description}
                </TableCell>
            </TableRow>
        </>

    );
};

export default Problem;
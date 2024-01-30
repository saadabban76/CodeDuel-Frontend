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
    return (
        <>
            <TableRow className={cn('bg-white/10 text-white  h-24 relative')}>
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
        </>

    );
};

export default Problem;
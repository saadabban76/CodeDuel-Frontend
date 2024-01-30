"use client"

import React, { useState } from 'react'
import Problem from './Problem';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';

const ProblemsContainer = () => {

    const [activeIndex, setActiveIndex] = useState<null | number>(null);

    const problemsData = [
        {
            title: "Two Sum",
            fees: 0,
            description: "Given an array of integers `nums` and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order."
        },
        {
            title: "Longest Substring Without Repeating Characters",
            fees: 10,
            description: "Given a string `s`, find the length of the longest substring without repeating characters."
        },
        {
            title: "Reverse Integer",
            fees: 0,
            description: "Given a signed 32-bit integer `x`, return `x` with its digits reversed. If reversing `x` causes the value to go outside the signed 32-bit integer range `[-2^31, 2^31 - 1]`, then return 0."
        },
        {
            title: "Merge Two Sorted Lists",
            fees: 0,
            description: "Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists."
        },
        {
            title: "Container With Most Water",
            fees: 20,
            description: "Given n non-negative integers `a1, a2, ..., an` where each represents a point at coordinate `(i, ai)`. n vertical lines are drawn such that the two endpoints of the line `i` is at `(i, ai)` and `(i, 0)`. Find two lines, which, together with the x-axis forms a container, such that the container contains the most water."
        },
        {
            title: "Palindrome Number",
            fees: 0,
            description: "Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward."
        },
        {
            title: "Longest Common Prefix",
            fees: 0,
            description: "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string."
        },
        {
            title: "Valid Parentheses",
            fees: 0,
            description: "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: 1. Open brackets must be closed by the same type of brackets. 2. Open brackets must be closed in the correct order."
        },
        {
            title: "Roman to Integer",
            fees: 0,
            description: "Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999."
        },
        {
            title: "Remove Nth Node From End of List",
            fees: 15,
            description: "Given the head of a linked list, remove the nth node from the end of the list and return its head."
        }
    ];


    const isAnyOpen = activeIndex !== null;
    console.log('active INdex : ', activeIndex);

    return (
        <main className='p-2'>
            <MaxWidthWrapper>
                <Table className='text-white px-4 py-16 w-full'>
                    <TableHeader>
                        <TableRow className='text-white text-left'>
                            <TableHead>Id</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Fees</TableHead>
                            <TableHead>Take Part</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className='relative'>
                        {problemsData.length > 0 &&
                            problemsData.map((p, i) => {
                                const handleOpen = () => {
                                    if (activeIndex === i) {
                                        setActiveIndex(null);
                                    } else {
                                        setActiveIndex(i);
                                    }
                                };
                                const isOpen = i === activeIndex;

                                return (
                                    <>
                                        <Problem
                                            key={i}
                                            id={i}
                                            fees={p.fees}
                                            title={p.title}
                                            description={p.description}
                                            isOpen={isOpen}
                                            isAnyOpen={isAnyOpen}
                                            handleOpen={handleOpen}
                                        />
                                        <TableRow className={"flex absolute"}>
                                            sdfsdfasdasdffffffffffffff
                                        </TableRow>
                                    </>

                                );
                            })}
                    </TableBody>
                </Table>
            </MaxWidthWrapper>
        </main>
    )
}

export default ProblemsContainer
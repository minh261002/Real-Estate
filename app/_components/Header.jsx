"use client"

import { Button } from '@/components/ui/button'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const Header = () => {
    const path = usePathname();
    const { user, isSignedIn } = useUser();

    return (
        <div className='p-6 px-10 flex justify-between shadow-sm fixed top-0 w-full z-10 bg-white'>
            <div className='flex gap-10 items-center'>
                <Image src={'/logo.svg'} alt='logo' width={150} height={150} />

                <ul className='md:flex gap-10'>
                    <li className={`hover:text-primary font-medium text-sm ${path === '/' ? 'text-primary' : ''}`}>For Sale</li>
                    <li className={`hover:text-primary font-medium text-sm ${path === '/rent' ? 'text-primary' : ''}`}>For Rent</li>
                    <li className={`hover:text-primary font-medium text-sm ${path === '/finder' ? 'text-primary' : ''}`}>Agent Finder</li>
                </ul>
            </div>

            <div className='flex gap-2'>
                <Link href='/add-new-listing'>
                    <Button className="flex gap-2">
                        <Plus className='w-5 h-5' />
                        Post Your Ad
                    </Button>
                </Link>
                {
                    isSignedIn ? <UserButton /> :
                        <Button variant="outline">
                            <Link href='/sign-in'>
                                Sign In
                            </Link>
                        </Button>
                }
            </div>
        </div>
    )
}

export default Header
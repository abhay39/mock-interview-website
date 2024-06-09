"use client"
import { UserButton } from '@clerk/nextjs'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const navlinks = [
    {
        name: 'Dashboard',
        path: '/dashboard',
    },
    {
        name: 'Questions',
        path: '/dashboard/questions',
    },
    {
        name: 'About Us',
        path: '/dashboard/about',
    },
    {
        name: 'How it works?',
        path: '/dashboard/workings',
    },

]
const Header = () => {
    const pathName = usePathname();
    const [openNavs, setOpenNavs] = useState(false);

    const openNav = () => {
        setOpenNavs(!openNavs)
    }
    return (
        <div className=' flex items-center  p-4 justify-between bg-secondary shadow-sm'>
            <Link href={"/dashboard"}>
                <Image src={"/logo.svg"} height={100} width={160} alt='logo' />
            </Link>
            <ul className=' hidden md:flex gap-6 items-center'>
                {
                    navlinks.map((item, index) => {
                        return (
                            <li key={index} className={`hover:text-primary hover:font-bold transition-all cursor-pointer duration-700 ${pathName == item.path ? "text-blue-600 font-bold" : "text-black"}`}><Link href={item.path}>{item.name}</Link></li>
                        )
                    })
                }
            </ul>
            <div className=' flex items-center gap-4'>
                <MenuIcon className=' md:hidden' onClick={openNav} />
                <UserButton />
            </div>

            {
                openNavs && (
                    <div className=" fixed  top-0 left-0 w-full z-50 min-h-screen  flex-col items-center justify-between border-e bg-white">
                        <div className="px-4 py-6 flex items-center justify-center">
                            <ul className='  flex gap-20 flex-col items-center'>
                                {
                                    navlinks.map((item, index) => {
                                        return (
                                            <li key={index} className={`hover:text-primary hover:font-bold transition-all cursor-pointer duration-700 ${pathName == item.path ? "text-blue-600 font-bold" : "text-black"}`}><Link onClick={openNav} href={item.path}>{item.name}</Link></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>


                    </div>
                )
            }
        </div>
    )
}

export default Header
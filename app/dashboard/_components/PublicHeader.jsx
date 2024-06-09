"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navlinks=[
    {
        name:'Home',
        path:'/',
    },
    {
        name:'Questions',
        path:'/questions',
    },
    {
        name:'About Us',
        path:'/about',
    },
    {
        name:'How it works?',
        path:'/workings',
    },

]
const PublicHeader = () => {
    const pathName=usePathname();
    const {user}=useUser();

  return (
    <div className=' flex items-center  p-4 justify-between bg-secondary shadow-sm'>
        <Link href={"/dashboard"}>
        <Image src={"/logo.svg"} height={100} width={160} alt='logo'/>
        </Link>
        <ul className=' hidden md:flex gap-6 items-center'> 
            {
                navlinks.map((item,index)=>{
                    return(
                        <li key={index} className={`hover:text-primary hover:font-bold transition-all cursor-pointer duration-700 ${pathName==item.path?"text-blue-600 font-bold":"text-black"}`}><Link href={item.path}>{item.name}</Link></li>
                    )
                })
            }
        </ul>
        {
            user ? (<UserButton />) : (
                <div className=' flex flex-row gap-6'>
                    <Link className=' border p-3 rounded-md ' href={"/sign-in"}>
                        Sign In
                    </Link>
                    <Link className=' bg-black p-3 rounded-md text-white' href={"/sign-up"}>
                        Sign Up
                    </Link>
                </div>
            )
        }
    </div>
  )
}

export default PublicHeader
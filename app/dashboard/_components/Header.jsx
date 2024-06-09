"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navlinks=[
    {
        name:'Dashboard',
        path:'/dashboard',
    },
    {
        name:'Questions',
        path:'/dashboard/questions',
    },
    {
        name:'About Us',
        path:'/dashboard/about',
    },
    {
        name:'How it works?',
        path:'/dashboard/workings',
    },

]
const Header = () => {
    const pathName=usePathname();
    

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
        <UserButton />
    </div>
  )
}

export default Header
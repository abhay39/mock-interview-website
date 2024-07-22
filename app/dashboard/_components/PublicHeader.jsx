"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

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
    const [openModel,setOpenModel]=useState(false);

    const handleModel=()=>{
        setOpenModel(!openModel)        
    }

  return (
    <div className=' flex  items-center flex-wrap  p-4 justify-between bg-secondary shadow-sm select-none'>
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
                <div className=' hidden md:flex flex-row items-center justify-center flex-wrap gap-6'>
                    <Link className=' border p-3 rounded-md ' href={"/sign-in"}>
                        Sign In
                    </Link>
                    <Link className=' bg-black p-3 rounded-md text-white' href={"/sign-up"}>
                        Sign Up
                    </Link>
                </div>
            )
        }
        {
            <Menu  onClick={handleModel} className=' bg-slate-600 text-white rounded-full cursor-pointer p-1 md:hidden'/>
        }
        {
            openModel && (
                <div className=' min-h-screen fixed backdrop-blur-md top-0 left-0 w-full flex flex-col items-center justify-center flex-wrap transition-all duration-700 gap-6'>
                    <ul className=' flex flex-col gap-6 items-center'> 
                        {
                            navlinks.map((item,index)=>{
                                return(
                                    <li key={index} className={`hover:text-primary hover:font-bold transition-all cursor-pointer duration-700 ${pathName==item.path?"text-blue-600 font-bold":"text-black"}`}><Link href={item.path}>{item.name}</Link></li>
                                )
                            })
                        }
                    </ul>
                    <div className=' flex flex-col items-center justify-center flex-wrap gap-6'>
                        <p onClick={ handleModel } className='  top-3 bg-red-500 p-2 rounded-full px-3 cursor-pointer  text-center text-white fixed right-3'>X</p>
                        <Link onClick={ handleModel } className=' border p-3 rounded-md ' href={"/sign-in"}>
                            Sign In
                        </Link>
                        <Link onClick={ handleModel } className=' bg-black p-3 rounded-md text-white' href={"/sign-up"}>
                            Sign Up
                        </Link>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default PublicHeader
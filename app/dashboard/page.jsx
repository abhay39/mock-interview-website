"use client"
import React, { useState } from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList';



const page = () => {
  
  const [openDialog, setOpenDialog]=useState(false);
  return (
    <div className=' p-10'>
      <h2 className=' font-bold text-2xl z'>Dashboard</h2>
      <h2 className=' text-gray-500'>Create And start your AI mock Interview</h2>

      <div  className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
        <AddNewInterview />
      </div>

      <InterviewList />
      

    </div>
  )
}

export default page
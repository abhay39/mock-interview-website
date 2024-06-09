"use client"
import { db } from "@/utils/db";
import { MockInterview, UserAnswer } from "@/utils/schema";
import { useUser } from "@clerk/nextjs"
import { desc, eq } from "drizzle-orm";
import { useEffect, useState } from "react";
import InterviewCard from "./InterviewCard";

const InterviewList = () => {
    const {user}=useUser();
    const [feedbackss, setFeedbacks] = useState([]);


    const getFeedback = async () => {
        const interview = await db.select().from(MockInterview).where(eq(MockInterview.createdBy, user?.primaryEmailAddress?.emailAddress)).orderBy(desc(MockInterview.id))
        setFeedbacks(interview)
        
    }
    useEffect(() => {
        getFeedback();
    }, [user])

  return (
    <div>
        <h2 className=" font-medium text-xl">Previous Mock Interview</h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
            {
                feedbackss && feedbackss.map((feedback, index) => {
                    return (
                        <InterviewCard key={index} feedback={feedback}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default InterviewList
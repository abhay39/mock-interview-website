"use client"
import QuestionSections from '@/app/dashboard/_components/QuestionSections';
import RecordAnswerSection from '@/app/dashboard/_components/RecordAnswerSection';
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {
  useEffect(() => {
    getInterviewDetails();
  }, [])

  const [interviewData, setInterviewData] = useState()
  const [interviewQuestions, setInterviewQuestions] = useState()
  const [webCamEnabled, setWebCamEnabled] = useState(false);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  const getInterviewDetails = async () => {
    const interviewId = params.interviewId;
    const interview = await db.select().from(MockInterview).where(eq(MockInterview.mockId, interviewId))
    const jsonMockResponse= JSON.parse(interview[0]?.jsonMockResp);
    setInterviewData(interview[0])
    setInterviewQuestions(jsonMockResponse)
  }
  

  return (
    <div>
      <div className=' grid grid-cols-1 gap-5 lg:grid-cols-2'>
        {/* questions */}
        <QuestionSections activeQuestionIndex={activeQuestionIndex} interviewQuestions={interviewQuestions}/>
        {/* video audio recording */}
        <RecordAnswerSection interviewQuestions={interviewQuestions} activeQuestionIndex={activeQuestionIndex} interviewData={interviewData}/>
      </div>
      <div className=' flex justify-end gap-6'>
        {activeQuestionIndex>0 && <Button onClick={()=>{
          setActiveQuestionIndex(activeQuestionIndex-1)
        }}>Previous Question</Button>}
        {activeQuestionIndex!==interviewQuestions?.length-1 && <Button onClick={()=>{
          setActiveQuestionIndex(activeQuestionIndex+1)
        }}>Next Question</Button>}
        
        {activeQuestionIndex==interviewQuestions?.length-1 && <Link href={`/dashboard/interview/${interviewData?.mockId}/feedback`}><Button>End Interview</Button></Link>}
      </div>
    </div>
  )
}

export default page
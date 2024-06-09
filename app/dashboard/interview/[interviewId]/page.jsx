"use client"
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { Lightbulb, WebcamIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam';

const page = ({ params }) => {

    useEffect(() => {
        getInterviewDetails();
    }, [])

    const [interviewData, setInterviewData] = useState()
    const [webCamEnabled, setWebCamEnabled] = useState(false);
    const router=useRouter();

    const getInterviewDetails = async () => {
        const interviewId = params.interviewId;
        const interview = await db.select().from(MockInterview).where(eq(MockInterview.mockId, interviewId))
        setInterviewData(interview[0])
    }

    return (
        <div className=' my-10  '>
            <h2 className=' font-bold text-2xl'>Let's Get Started</h2>
            <div className=' grid grid-cols-1 gap-10 items-center md:grid-cols-2'>

                <div className=' flex flex-col my-5 '>
                    <div className=' flex flex-col my-5 rounded-lg border p-5'>
                        <h2 className=' text-lg'><strong>Job Role/Job Position: </strong>{interviewData?.jobPosition}</h2>
                        <h2 className=' text-lg'><strong>Job Description/Tech Stack: </strong>{interviewData?.jobDesc}</h2>
                        <h2 className=' text-lg'><strong>Year of Experience: </strong>{interviewData?.jobExperience}</h2>
                    </div>
                    <div className=' border p-5 rounded-lg border-yellow-300 bg-yellow-100'>
                        <h2 className='flex gap-2 text-yellow-500'><Lightbulb /> <strong>Information</strong></h2>
                        <h2 className=' mt-3 text-yellow-500 text-justify text-sm'>{process.env.NEXT_PUBLIC_RULES}</h2>
                    </div>
                </div>
                <div>
                    {/* <Webcam /> */}
                    {
                        webCamEnabled ? (<Webcam onUserMedia={() => {
                            setWebCamEnabled(true)
                        }}
                            onUserMediaError={() => {
                                setWebCamEnabled(false)
                            }}
                            mirrored={true}
                            style={{
                                height: 400,
                                width: '100%',

                            }} />) : (<>
                                <WebcamIcon className=' h-72 my-7 w-full p-20 bg-secondary rounded-lg border' />
                                <Button type="ghost" className="w-full" onClick={() => {
                                    setWebCamEnabled(true)
                                }}>Enable Web Cam and Microphone</Button>
                            </>)
                    }

                </div>
            </div>
            <div className="flex justify-end items-end">
                <Link className=' bg-black p-3 rounded-md text-white mt-3' href={`/dashboard/interview/${params.interviewId}/start`}>Start Interview</Link>
            </div>
        </div>
    )
}

export default page
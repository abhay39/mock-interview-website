"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Webcam from "react-webcam"
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic, StopCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { chatSession } from "@/utils/GeminiAIModel";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

const RecordAnswerSection = ({interviewQuestions,activeQuestionIndex,interviewData}) => {

    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
        setResults
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });
    const [userAnswer,setUserAnswer]=useState('')

    useEffect(()=>{
        {
            results.map((item)=>{
                setUserAnswer((prev)=>prev+item?.transcript)
            })
        }
    },[results])

    const {user}=useUser();
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        if(!isRecording && userAnswer.length>10){
            updateUserAnswerInDB();
        }
        
    },[userAnswer])


    const StartStopRecording =async()=>{
        if(isRecording){
            
            stopSpeechToText()
            
        }else{
            startSpeechToText()
        }
    }

    const updateUserAnswerInDB=async()=>{
        console.log(userAnswer)
        setLoading(true)
        const feedbackPrompt="Question"+interviewQuestions[activeQuestionIndex]?.question+",. User Answer: "+userAnswer+",. Depends on Questions and user answer for given interview. please give us rating for answer and feedback as area of improvement if any in just 3 to 5 lines to improve it in JSON format with rating field and feedback";

            const result = await chatSession.sendMessage(feedbackPrompt);
            const mockJSONResp= result.response.text().replace('```json','').replace('```','')
            console.log(mockJSONResp)
            const JSONRESPONSE=JSON.parse(mockJSONResp);

            const res=await db.insert(UserAnswer).values({
                mockIdRef:interviewData?.mockId,
                question:interviewQuestions[activeQuestionIndex]?.question,
                correctAnswer:interviewQuestions[activeQuestionIndex]?.answer,
                userAnswer:userAnswer,
                rating:JSONRESPONSE?.rating,
                feedback:JSONRESPONSE?.feedback,
                userEmail:user.primaryEmailAddress.emailAddress,
                createdAt:moment().format('DD-MM-YYYY')
            })
            if(res){
                toast("User answer recorded successfully!!!")
                setUserAnswer('');
                setResults([]);
            }
            setResults([]);
            setLoading(false)
    }


    return (
        <div className=" flex items-center justify-center flex-col">
            <div className=" flex flex-col mt-20 justify-center items-center bg-black  rounded-lg p-5">
                <Image src={"/webcam.png"} height={200} width={200} className=" absolute" />
                <Webcam
                    mirrored={true}
                    style={{
                        height: 300,
                        width: '100%',
                        zIndex: 10
                    }}
                />
            </div>
            <Button disabled={loading} onClick={StartStopRecording} variant="outline" className="my-10">{
                isRecording ? <h2 className=" text-red-600 flex gap-2"><StopCircle /> Stop Recording</h2> : <h2 className=" flex gap-2 items-center text-blue-400"><Mic />Record Answer</h2>
            }</Button>
            
        </div>
    )
}

export default RecordAnswerSection
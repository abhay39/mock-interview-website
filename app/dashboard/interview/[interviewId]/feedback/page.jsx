"use client"
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { useEffect, useState } from "react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronUp, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Feedback = ({ params }) => {
    const [feedbackss, setFeedbacks] = useState([]);
    const [totalRating, setTotalRating] = useState(0)

    const getFeedback = async () => {
        const interviewId = params.interviewId;
        const interview = await db.select().from(UserAnswer).where(eq(UserAnswer.mockIdRef, interviewId)).orderBy(UserAnswer.id)
        setFeedbacks(interview)
    }

    useEffect(() => {
        getFeedback();
    },[params])

    const router = useRouter();

    useEffect(() => {
        let rating = 0;
        if (feedbackss) {
            feedbackss.map(item => {
                rating += parseInt(item.rating)
            })
            setTotalRating(rating)
        }
    }, [feedbackss])

    return (
        <div className=" p-10">

            {
                feedbackss?.length === 0 ? (<h1 className=" font-bold text-xl text-gray-500">No Interview</h1>) : (
                    <div>
                        <h2 className=" font-bold text-2xl text-green-500">Congratulation!!</h2>
                        <h2 className=" font-bold text-2xl">Here is your interview feedback</h2>
                        <h2 className=" text-blue-400 text-lg my-3">Your Overall interview rating: <strong>{totalRating / 10}/10</strong></h2>

                        <h2 className=" text-sm text-gray-500">Find below interview questions with correct answer, Your answer and feedback for improvement!</h2>

                        {
                            feedbackss && feedbackss.map((item, index) => {

                                return (
                                    <Collapsible className=" mt-7" key={index}>
                                        <CollapsibleTrigger className=" bg-slate-100 p-2 flex justify-between w-full text-left gap-7 rounded-lg my-2">Q{index + 1}. {item.question}
                                            <ChevronsUpDown className=" h-5 w-5" />
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <div className=" flex flex-col gap-2">
                                                <h2 className=" text-red-500 p-2 border rounded-lg"><strong>Rating: </strong> {item.rating}</h2>
                                                <h2 className=" p-2 border rounded-lg bg-red-50 text-sm text-red-900"><strong>Your Answer: </strong>{item.userAnswer}</h2>
                                                <h2 className=" p-2 border rounded-lg bg-green-50 text-sm text-green-900"><strong>Correct Answer: </strong>{item.correctAnswer}</h2>
                                                <h2 className=" p-2 border rounded-lg bg-blue-50 text-sm text-blue-900"><strong>Feedback : </strong>{item.feedback}</h2>
                                            </div>
                                            {item.answer}
                                        </CollapsibleContent>
                                    </Collapsible>

                                )
                            })
                        }
                    </div>
                )
            }


            <Button onClick={() => {
                router.replace("/dashboard")
            }}>Go Home</Button>
        </div>
    )
}

export default Feedback
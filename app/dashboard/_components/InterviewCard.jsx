import { Button } from "@/components/ui/button"
import Link from "next/link"

const InterviewCard = ({feedback}) => {

  return (
    <div className=" border shadow-sm rounded-lg p-3">
        <h2 className=" font-bold text-blue-400">{feedback?.jobPosition}</h2>
        <h2 className=" text-sm text-gray-600">{feedback?.jobExperience} Years of Experience</h2>
        <h2 className=" text-xs text-gray-400">Created At: {feedback?.createdAt}</h2>
        <div className=" flex items-center justify-between mt-3 gap-5">
            <Link href={`/dashboard/interview/${feedback?.mockId}/feedback`}>
            <Button size="sm" variant="outline" className="w-full">Feedback</Button>
            </Link>
            
            <Link href={`/dashboard/interview/${feedback?.mockId}/start`}><Button  size="sm" className="w-full">Start</Button></Link>
        </div>
    </div>
  )
}

export default InterviewCard
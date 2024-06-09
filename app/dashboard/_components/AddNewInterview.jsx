import React,{useState} from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/GeminiAIModel'
import { LoaderCircle } from 'lucide-react'
import { db } from '@/utils/db'
import {v4 as uuidv4} from 'uuid';
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { MockInterview } from '@/utils/schema'
import { useRouter } from 'next/navigation'
const AddNewInterview = () => {

  const [openDialog, setOpenDialog]=useState(false);
  const [jobPosition,setJobPosition] = useState();
  const [jobDesc,setJobDesc] = useState();
  const [jobExp,setJobExp] = useState();
  const [loadings,setLoadings] = useState(false);
  const [jsonResponse,setJsonResponse] = useState([]);
  const router=useRouter();

  const {user}= useUser();

  const onSubmit=async(e)=>{
    e.preventDefault();
    setLoadings(true);
    // console.log(jobPosition,jobDesc,jobExp)

    const InputPrompt=`Job Role: ${jobPosition}, Job Description : ${jobDesc}, Year Of Experience: ${jobExp}. Based on job role, job description and job experiencegive us interview ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} question along with answer in json format. Give us question and anwer in json format`;

    const result= await chatSession.sendMessage(InputPrompt);
    const MockJsonResponse=result.response.text().replace('```json','').replace('```','')
    setJsonResponse(MockJsonResponse);

    if(MockJsonResponse){
      const resp= await db.insert(MockInterview).values({
        mockId:uuidv4(),
        jsonMockResp:MockJsonResponse,
        jobPosition:jobPosition,
        jobDesc:jobDesc,
        jobExperience:jobExp,
        createdBy:user?.primaryEmailAddress?.emailAddress,
        createdAt:moment().format('DD-MM-YYYY'),
      }).returning({
        mockId:MockInterview.mockId
      })
      // console.log("Inserted",resp)
      if(resp){
        setOpenDialog(false);
        setJobPosition('');
        setJobDesc('');
        setJobExp('');
        setJsonResponse('');
        setLoadings(false);
        router.push("/dashboard/interview/"+resp[0].mockId);
      }
    }else{
      console.log('error')
    }

    setLoadings(false);
  }

  return (
    <div>
        <div onClick={()=>{
        setOpenDialog(true)
      }} className=' p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all duration-700'>
            <h2  className=' font-bold text-lg text-center'>+ Add New</h2>
        </div>
        <Dialog open={openDialog}>
        <DialogContent className=" max-w-2xl">
          <DialogHeader>
            <DialogTitle className=' font-bold text-2xl text-black'>Tell us more about job you are interviewing</DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
              <div>
                <h1>Add details about your job position/role, Job description and year of experience </h1>
                <div className=' mt-7'>
                  <label className='mb-2' htmlFor="">Job Role/Job Position</label>
                  <Input onChange={(e)=>{
                    setJobPosition(e.target.value)
                  }} placeholder="Ex. Fullstack" required/>
                </div>
                <div className=' mt-7'>
                  <label className='mb-2' htmlFor="">Job Description/Tech Stack (In short)</label>
                  <Textarea onChange={(e)=>{
                    setJobDesc(e.target.value)
                  }} placeholder="Ex. React, Angular, Next.js, MySQL" required/>
                </div>
                <div className=' mt-7'>
                  <label className='mb-2' htmlFor="">Year of Experience</label>
                  <Input onChange={(e)=>{
                    setJobExp(e.target.value)
                  }}  placeholder="Ex. Fresher, 1,2,3" required/>
                </div>
              </div>
              <div className=' flex gap-5 justify-end mt-4'>
                <Button onClick={()=>{
                  setOpenDialog(false)
                  }} variant="ghost">Cancel</Button>
                <Button disabled={loadings} type="submit">{
                  loadings ? (<div className=' flex gap-2 items-center'><LoaderCircle className=' animate-spin' /> Generating from AI</div>) : ("Start Interview")}</Button>
              </div>
                </form>
            </DialogDescription>

          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddNewInterview
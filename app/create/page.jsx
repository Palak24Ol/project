"use client"
import React, { useState } from 'react'
import SelectOption from './_components/SelectOption'
import { Button } from '@/components/ui/button';
import TopicInput from './_components/TopicInput';

function Create() {
  const [step, setStep]=useState(0);
  const [formData, setFormData]=useState([]);
  const handleUserInput=(fieldName, fieldValue)=>{
    setFormData(prev=>({
      ...prev,
      [fieldName]:fieldValue
    }))
    console.log(formData);

  }
  return (
    <div className='flex flex-col items-center p-5 md:px-24 lg:px-36 mt-20'> 
      <h2 className='font-bold text-4xl text-primary'>Start Building Your Personal Study Material </h2>
      <p className='text-gray-500 text-lg'>Fill All Detail Inorder To Generate Study Material For Your Next Project</p>
      <div className='mt-10'>
        {step==0?
        <SelectOption selectedStudyType={(value)=>handleUserInput('studyType', value)}/>
        : <TopicInput setTopic={(value)=>handleUserInput('topic',value)}
        setDifficultyLevel={(value)=>handleUserInput('difficulty level', value)
        }/>
        }
      </div>
      <div className='flex justify-between w-full mt-32'>
        {step!=0?<Button variant='outline' onClick={()=>setStep(step-1)}>Previous</Button> : '-' }
        {step==0?<Button onClick={()=>setStep(step+1)}>Next</Button>:<Button>Generate</Button>}
      </div>
    </div>
  )
}

export default Create
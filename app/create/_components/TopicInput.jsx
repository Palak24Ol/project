import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
 

function TopicInput({setTopic,setDifficultyLevel}) {
    return (
        <div className='mt-10 w-full flex flex-col'>
            <h2>Enter the Topic or paste the Content for which you want to generate study material</h2>
            <Textarea placeholder='Start Writing Here' className='mt-2 w-full' onChange={(event)=>setTopic(event.target.value)}/>
            <h2 className='mt-5 mb-3'>Select the difficulty level</h2>
            <Select onValueChange={(value)=>setDifficultyLevel(value)}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="DIFFICULTY LEVEL" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="EASY">EASY</SelectItem>
                    <SelectItem value="MODERATE">MODERATE</SelectItem>
                    <SelectItem value="HARD">HARD</SelectItem>
                </SelectContent>
            </Select>





        </div>
    )
}

export default TopicInput
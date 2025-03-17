import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'

function SideBar() {
  return (
    <div className='h-screen shadow-md p-5'>
        <div className='flex gap-2 items-center'>
            <Image src={'/logo.svg'} alt='logo' width={40} height={40}/>
            <h2 className="font-bold-text-2xl">EASY STUDY</h2>
        </div>
<div className='mt-10'>
    <Button className="w-full">+Create New</Button>
</div>
    </div>
  )
}

export default SideBar
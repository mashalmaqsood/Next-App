'use client';
import React from 'react'
import { useRouter } from 'next/navigation';
 const NewUserpage = () => {
 const router = useRouter();
  return (
    <div>
        <button className='btn btn-primary' onClick={()=> {router.push("/users")}} >Create</button>
    </div>
  )
}

export default NewUserpage;
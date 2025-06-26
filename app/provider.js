'use client'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import { Users } from '@/configs/schema.js'
import {db} from '@/configs/db.js'
import React ,{ useEffect } from 'react'

const Provider = ({children}) => {
  const {user} = useUser();
  console.log(user);

  useEffect(()=>{
    user && isNewUser();
  },[user])

  const isNewUser = async()=>{
    const result = await db.select().from(Users).where(eq(Users.email,user?.primaryEmailAddress?.emailAddress));
    console.log(result);
    
    if(!result[0]){
      await db.insert(Users).values({
        name:user?.firstName,
        email:user?.primaryEmailAddress?.emailAddress,
        imageUrl:user?.imageUrl
      })
    }
  }
  return (
    <div>
        {children}
    </div>
  )
}

export default Provider
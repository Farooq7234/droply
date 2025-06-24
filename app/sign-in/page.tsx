'use client'

import { Button } from '@/components/ui/button'
import { signIn, useSession } from 'next-auth/react'
import { FaGithub, FaGoogle } from "react-icons/fa";
import React from 'react'

const Page = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4'>
       <Button onClick={() => signIn('github')}><FaGithub className='mr-2' />Sign in with GitHub</Button>
        <Button onClick={() => signIn('google')}><FaGoogle className='mr-2' />Sign in with Google</Button>

    </div>
  )
}

export default Page

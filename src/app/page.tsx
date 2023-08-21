'use client'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { useCounter } from '@/hooks/useCounter'
import { useState } from 'react'

export default function Home() {
  const { count, decrement, increment, total } = useCounter()

  return (
    <div className='h-screen flex-1 bg-slate-900 flex justify-center items-center flex-col'>
      <div className='
        gap-2 
        text-3xl text-white font-bold
        flex justify-center
        '
      >
        <Button text="-" onClick={decrement} />
        {count}
        <Button text="+" onClick={increment} />
      </div>
      <span className='text-white'>total: {total}</span>
    </div>
  )
}

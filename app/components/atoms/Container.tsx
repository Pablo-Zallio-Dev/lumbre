import React from 'react'

export default function Container({id, children}: {id: string, children?:React.ReactNode}) {
  return (
    <section id={id} className=' w-full min-h-screen pt-18 px-[clamp(2rem,10vw,7rem)]'>{children}</section>
  )
}


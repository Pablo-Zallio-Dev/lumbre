
import React from 'react'

export default function NumberItem({number}: {number: string}) {
  return (
    <p className=" font-roboto font-black text-sm text-accent tracking-widest ">{number}</p>
  )
}

import React from 'react'

export default function Logo({brandText}: {brandText: string}) {
  return (
    <h2 className=" uppercase font-roboto font-bold tracking-[3.2px] ">{brandText}</h2>
  )
}

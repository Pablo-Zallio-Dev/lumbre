import React from 'react'

export type titleSectionProps = {
      children: React.ReactNode
}
export default function TitleSection({children}:titleSectionProps) {
  return (
    <div className=" uppercase font-roboto font-black text-fluid-titleSection tracking-tighter ">{children}</div>
  )
}

import Link from 'next/link'
import React from 'react'

export type linkNavProps = {
      label: string,
      link: string,
      isOpen: boolean
      setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function LinkNav({link, label, isOpen, setIsOpen}: linkNavProps) {
  return (
    <Link href={link} className=' font-roboto font-bold text-fluid-linkNav' onClick={() => setIsOpen(!isOpen)} >{label}</Link>
  )
}

import Link from 'next/link'
import React from 'react'

export type buttonPrimaryProps = {
      label: string,
      href: string
}

export default function ButtonPrimary({label, href}: buttonPrimaryProps) {
  return (
    <Link className=' flex items-center max-w-max py-3.5 px-7 bg-black uppercase font-roboto font-bold text-xs text-cream tracking-[0.2em] hover:bg-accent transition-colors duration-200 ' href={href}>
      {label}
    </Link>
  )
}

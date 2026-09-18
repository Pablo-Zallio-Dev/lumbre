import Link from 'next/link'
import React from 'react'

export type buttonPrimaryProps = {
      label: string,
      href: string
}

export default function ButtonPrimary({label, href}: buttonPrimaryProps) {
  return (
    <Link className=' max-w-max py-3.5 px-7 bg-black uppercase font-roboto text-xs text-cream tracking-widest hover:bg-accent transition-colors duration-200 ' href={href}>
      {label}
    </Link>
  )
}

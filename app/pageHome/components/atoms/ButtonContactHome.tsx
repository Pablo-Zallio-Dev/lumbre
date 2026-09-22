import Link from 'next/link'
import { HiArrowLongRight } from "react-icons/hi2";

import React from 'react'

export type buttonContactHomeProps = {
      label: string,
      href: string
}


export default function ButtonContactHome({label, href}:buttonContactHomeProps) {
  return (
    <Link className=' flex items-center gap-2 py-3.5 text-sm text-muted hover:text-black font-inconsolata border-b border-cream hover:border-black transition-all duration-200 ' href={href}>
      {label}
      <HiArrowLongRight />
    </Link>
  )
}

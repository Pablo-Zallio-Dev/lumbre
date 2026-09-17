import React from 'react'

export type paragraphProps = {
      children: React.ReactNode,
      className?: string,
}

export default function Paragraph({children, className}: paragraphProps) {
  return (
    <p className={`  font-inconsolata ${className} `}> {children} </p>
  )
}

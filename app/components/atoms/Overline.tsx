import React from 'react'

export type overlineProps = {
      text: string,
      className?: string
}

export default function Overline( {text, className}: overlineProps ) {
  return (
    <p className={` font-inconsolata font-bold text-muted tracking-widest uppercase text-sm ${className} `}> {text} </p>
  )
}

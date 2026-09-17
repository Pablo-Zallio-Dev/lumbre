import React from 'react'

export type overlineProps = {
      text: string,
      className?: string
}

export default function Overline( {text, className}: overlineProps ) {
  return (
    <p className={` uppercase text-xs ${className} `}> {text} </p>
  )
}

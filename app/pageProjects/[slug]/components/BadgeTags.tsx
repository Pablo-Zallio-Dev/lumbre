import React from 'react'

export default function BadgeTags({tag}: {tag: string}) {
  return (
    <p className="py-1.5 px-3 border border-border uppercase font-inconsolata text-xs tracking-widest ">{tag}</p>
  )
}

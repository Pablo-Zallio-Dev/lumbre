import React from 'react'

export default function Container({ id, children, accent }: { id?: string, children?: React.ReactNode, accent?: boolean }) {
      return (
            <section id={id} className={` w-full min-h-screen pt-18 px-[clamp(2rem,10vw,7rem)] ${accent ? 'bg-foreground' : 'bg-cream'} `}>{children}</section>
      )
}


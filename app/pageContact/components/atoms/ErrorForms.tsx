import React from 'react'

export default function ErrorForms({error}: {error?: string}) {
  return (
    <p className={`  absolute -bottom-6 text-accent font-bold uppercase font-inconsolata text-sm ${error ?'opacity-100' :'opacity-0'} transition-opacity duration-500 `}>{error}</p>
  )
}

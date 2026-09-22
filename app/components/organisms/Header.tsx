'use client'
import Logo from '../atoms/Logo'
import ButtonMenuNav from '../atoms/ButtonMenuNav'
import NavMobile from './NavMobile'
import { useState } from 'react'

export default function Header() {
      const [isOpen, setIsOpen] = useState(false)
      console.log(isOpen)
  return (
    <section className=" fixed bottom-0 z-200  flex justify-center items-center w-full h-16 border-t border-border bg-cream   ">
      <div className=" flex items-center justify-between w-full sm:w-3/4 px-8 ">
      <Logo brandText={'lumbre'} />
      <ButtonMenuNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  )
}

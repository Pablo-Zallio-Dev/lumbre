import React from 'react'
import Logo from '../atoms/Logo'
import Paragraph from '../atoms/Paragraph'

export default function Footer() {
  return (
      <footer className=" flex justify-around items-center border-t border-border mb-16 h-16 ">
            <Logo brandText={'Lumbre estudio'} />
            <Paragraph>
                  2026 - Valencia
            </Paragraph>
      </footer>
  )
}

import React from 'react'
import { TfiClose } from "react-icons/tfi";
import LinkNav from '../atoms/LinkNav';
import Link from 'next/link';
import Paragraph from '../atoms/Paragraph';

export const navLinks = [
      { label: 'Home', href: '#home' },
      { label: 'Filosofía', href: '#filosofia' },
      { label: 'Proyectos', href: '#proyectos' },
      { label: 'Estudio', href: '#estudio' },
      { label: 'Contacto', href: '#contacto' },
] as const;

export default function NavMobile({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
      return (
            <section className={` fixed inset-0 z-50 flex flex-col md:flex-col-reverse justify-between transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} bg-cream `}>
                  <div className=" flex flex-col justify-center items-center gap-16 h-screen ">
                        <nav className={` flex flex-col gap-4 `}>
                              {
                                    navLinks.map((link) => (
                                          <LinkNav key={link.label} label={link.label} link={link.href} isOpen={isOpen} setIsOpen={setIsOpen} />
                                    ))
                              }
                        </nav>
                        <Link className='  ' href={''}>
                              <Paragraph>mail@mail.com</Paragraph>
                        </Link>
                  </div>
                  <button className=' justify-items-end py-4 md:py-12 px-8 md:px-16  ' onClick={() => setIsOpen(!isOpen)}><TfiClose size={24} /></button>
            </section>
      )
}

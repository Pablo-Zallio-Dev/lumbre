import ButtonPrimary from '@/app/components/atoms/ButtonPrimary'
import Paragraph from '@/app/components/atoms/Paragraph'
import Image from 'next/image'
import React from 'react'
import ButtonContactHome from '../atoms/ButtonContactHome'
import FadeIn from '@/app/components/atoms/FadeIn'


export default function PageOrigin() {
      return (
            <section id="home" className=" w-full  ">
                  <section className=" w-full flex flex-col items-center lg:flex-row lg:justify-between min-h-screen  ">
                        <FadeIn className="w-full flex flex-col items-center gap-8 lg:w-1/2 py-10 px-3 ">
                              <Paragraph>Arquitectura · Interiorismo · Valencia</Paragraph>
                              <div className="flex flex-wrap justify-center gap-2 max-w-max font-bold text-6xl sm:text-8xl xl:text-9xl tracking-tight leading-none">
                                    <h1 className="  text-black ">
                                          LUMBRE
                                    </h1>
                                    <span className=" text-accent ">
                                          ESTUDIO
                                    </span>
                              </div>
                              <p className=" font-inconsolata text-muted text-center px-20 ">Diseñamos con luz. Construimos con intención.</p>
                              <div className=" flex flex-wrap gap-8  ">
                                    <ButtonPrimary label={'ver proyectos'} href={'#proyectos'} />
                                    <ButtonContactHome label={'Contacto'} href={'#contacto'} />
                              </div>
                        </FadeIn>
                        <div className="relative z-40 w-full md:w-1/2 h-72 lg:h-screen ">
                              <Image src={'/image/image_home.webp'} alt={'Imagen de unos de los trabajos de arquitectura en la pagina principal'} fill priority
                                    className="object-cover" />
                        </div>
                  </section>
            </section>
      )
}

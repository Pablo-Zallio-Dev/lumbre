import React from 'react'
import Container from '../components/atoms/Container'
import Overline from '../components/atoms/Overline'
import TitleSection from '../components/atoms/TitleSection'
import proyectos from '@/data/data'
import Link from 'next/link'
import Image from 'next/image'
import TitleCardProyect from './components/atoms/TitleCardProyect'
import TextCardProyect from './components/atoms/TextCardProyect'
import { Metadata } from 'next'

export const metadata: Metadata = {
      title: "Proyectos — Lumbre Estudio",
      description:
            "Descubre los proyectos de arquitectura e interiorismo de Lumbre Estudio: viviendas, reformas y locales comerciales en Valencia.",
};


export default function PageProjects() {
      return (
            <Container id={'proyectos'}>
                  <section className="">
                        <Overline text={'trabajos seeccionados'} />
                        <TitleSection>
                              Proyectos
                        </TitleSection>
                        <section className=" grid grid-cols-1 sm:grid-cols-2 gap-16 my-12  ">
                              {
                                    proyectos.map((proyecto) => (
                                          <Link key={proyecto.id} href={`/pageProjects/${proyecto.slug}`} >
                                                <div className=" relative w-full h-100 overflow-hidden ">
                                                      <Image src={proyecto.imagenPortada} alt={'Imagen del proyecto en la tarjeta'} fill className=' lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105 object-cover transition-all duration-500 ' />
                                                </div>
                                                <div className=" py-3.5 px-2 bg-foreground ">
                                                      <TitleCardProyect titleCard={proyecto.titulo} />
                                                      <TextCardProyect textCard={proyecto.ubicacion} />
                                                </div>
                                          </Link>
                                    ))
                              }
                        </section>
                  </section>
            </Container>
      )
}

import React from 'react'
import Container from '../components/atoms/Container'
import Overline from '../components/atoms/Overline'
import Paragraph from '../components/atoms/Paragraph'
import Image from 'next/image'
import FadeIn from '../components/atoms/FadeIn'

export default function PageStudy() {
      return (
            <Container accent id={'estudio'}>
                  <section className=" grid grid-cols-1 md:grid-cols-2 items-center gap-18 xl:my-24 pb-18 ">
                        <FadeIn className=" flex flex-col gap-10 " delay={300}>

                              <Overline text={'el estudio'} />
                              <h3 className=" font-roboto font-bold text-fluid-subtitle leading-[1.05] ">Somos un estudio pequeño. <br /> <span className=' text-accent '> Eso es una ventaja.</span></h3>
                              <div className=" flex flex-col gap-6 w-full max-w-xl ">
                                    <Paragraph>
                                          Lumbre Estudio fue fundado en Valencia en 2019. Trabajamos en proyectos de arquitectura residencial y locales comerciales en la Comunitat Valenciana, con especial atención al clima mediterráneo como principio de diseño.
                                    </Paragraph>
                                    <Paragraph>
                                          Cada proyecto lo llevamos desde el primer encuentro hasta la última visita de obra. No delegamos las decisiones importantes. Creemos en la coherencia entre el concepto y la ejecución, y en que los mejores espacios son los que no necesitan explicación.
                                    </Paragraph>
                              </div>
                        </FadeIn>
                        <div className="relative w-full h-120 ">
                              <Image src={'/image/image_estudio.webp'} alt={'Imagen del estudio'} fill className=' object-cover ' />
                        </div>
                  </section>
            </Container>
      )
}

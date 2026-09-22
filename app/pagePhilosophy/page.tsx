import React from 'react'
import Container from '../components/atoms/Container'
import Overline from '../components/atoms/Overline'
import NumberItem from './components/atoms/NumberItem'
import Paragraph from '../components/atoms/Paragraph';
import Image from 'next/image';
import FadeIn from '../components/atoms/FadeIn';

const procesoSteps = [
      {
            numero: "01",
            titulo: "Escuchar",
            descripcion:
                  "Comenzamos con conversaciones profundas. Entendemos el modo de vida, los ritmos, las aspiraciones que darán forma al espacio.",
      },
      {
            numero: "02",
            titulo: "Conceptualizar",
            descripcion:
                  "Traducimos lo escuchado en un concepto espacial claro: una idea directora que guía cada decisión de diseño posterior.",
      },
      {
            numero: "03",
            titulo: "Materializar",
            descripcion:
                  "Seleccionamos materiales, acabados y sistemas constructivos. Cada elección responde a criterios de durabilidad, sostenibilidad y belleza.",
      },
      {
            numero: "04",
            titulo: "Habitar",
            descripcion:
                  "Acompañamos la obra hasta la entrega. El proyecto termina cuando el espacio empieza a vivirse.",
      },
];


export default function PagePhilosophy() {
      return (
            <Container id={'filosofia'}>
                  <section className=" flex flex-col items-center gap-14 lg:mt-4 mb-18 ">
                        <Overline text={'nuestro proceso'} />
                        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-18 ">
                              {
                                    procesoSteps.map((proceso, i) => (
                                          <FadeIn key={proceso.numero} delay={i * 200} className=" flex flex-col gap-4 ">
                                                      <NumberItem number={proceso.numero} />
                                                      <div className=" pt-6 border-t border-border ">
                                                            <h4 className="mb-4 font-roboto font-bold text-fluid-stepTitle   ">{proceso.titulo}</h4>
                                                            <Paragraph> {proceso.descripcion} </Paragraph>
                                                      </div>
                                          </FadeIn>
                                    ))
                              }
                        </div>
                        <div className="relative w-full max-w-3xl h-96">
                              <Image src={'/image/image_process.webp'} alt={'Imagen del interior del estudio en la seccion de filosofia de trabajo'} fill className=' object-cover' />

                        </div>
                  </section>
            </Container>
      )
}

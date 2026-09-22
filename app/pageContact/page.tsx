import React from 'react'
import Container from '../components/atoms/Container'
import Overline from '../components/atoms/Overline'
import Paragraph from '../components/atoms/Paragraph'
import Link from 'next/link'
import Image from 'next/image'
import Form from './components/organisms/Form'

export default function PageContact() {
      return (
            <Container id={'contacto'}>
                  <section className=" grid grid-cols-1 md:grid-cols-2  gap-16 w-full pb-18 ">
                        <div className=" flex flex-col gap-8 ">
                              <Overline text={'contacto'} />
                              <h3 className=" font-roboto font-black tracking-tight text-fluid-subtitle leading-[1.05] ">Cuentanos tu proyecto</h3>
                              <div className=" flex flex-col gap-4 ">
                                    <Link href={'mailto:'}> <Paragraph>hola@lumbreestudio.com</Paragraph> </Link>
                                    <Paragraph>+34 900 63 52 41</Paragraph>
                                    <Paragraph>C/ Colon, 43. Valencia</Paragraph>
                              </div>
                        </div>
                        <Image src={'/image/image_contact.webp'} alt={'Imagen del estudio en la seccion contacto'} width={400} height={800} className=' object-cover w-full h-full max-h-200 md:row-span-2 ' />
                        <div className="items-end ">
                              <Form />
                        </div>
                  </section>
            </Container>
      )
}

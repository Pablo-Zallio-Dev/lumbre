import Paragraph from '@/app/components/atoms/Paragraph'
import React from 'react'

export default function SendForm() {
      return (
            <section className=" p-12 h-full flex flex-col justify-center items-start border border-border ">
                  <h3 className=" pb-10 font-roboto font-black tracking-tight text-fluid-stepTitle leading-[1.05] ">Mensaje recibido</h3>
                  <Paragraph>Te escribiremos en los próximos días para concertar una primera conversación.

                  </Paragraph>
            </section>
      )
}

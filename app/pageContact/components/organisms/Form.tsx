'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ErrorForms from '../atoms/ErrorForms'
import SendForm from './SendForm'

export default function Form() {

      const [send, setSend] = useState(false)

      type FormData = {
            nombre: string;
            email: string;
            mensaje: string;
      };

      const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

      const onSubmit = (data: object) => {
            setSend(true)
            console.log(data)
            setTimeout(() => {
                  setSend(false)
            }, 3000);
      }

      if (send) {
            return <SendForm />
      }

      return (
            <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col gap-8 '>
                  <div className=" relative flex flex-col gap-2 font-inconsolata text-muted text-sm ">
                        <label htmlFor="nombre" className=' uppercase  tracking-widest ' >nombre</label>
                        <input id='nombre' type="text" {
                              ...register('nombre', {
                                    required: 'El nombre es obligatorio'
                              })
                        } className='py-3 border-b border-border text-lg focus:outline-0 focus:border-accent transition-colors duration-300 ' placeholder='Tu nombre' />
                        <ErrorForms error={errors.nombre?.message} />
                  </div>
                  <div className=" relative flex flex-col gap-2 font-inconsolata text-muted text-sm  ">
                        <label htmlFor="email" className=' uppercase  tracking-widest ' >email</label>
                        <input id='email' type="email" {
                              ...register('email', {
                                    required: 'El email es obligatorio'
                              })
                        } className='py-2 border-b border-border text-lg focus:outline-0 focus:border-accent transition-colors duration-300' />
                        <ErrorForms error={errors.email?.message} />
                  </div>
                  <div className=" relative flex flex-col gap-2 font-inconsolata text-muted focus:outline-0 focus:border-accent transition-colors duration-300  ">
                        <label htmlFor="mensaje" className=' uppercase  tracking-widest text-base ' >Mensaje</label>
                        <textarea {
                              ...register('mensaje', {
                                    required: 'El mensaje es obligatorio'
                              })
                        } rows={5} name="mensaje" id="mensaje" className=' border border-border resize-none focus:outline-0 focus:border-accent '></textarea>
                        <ErrorForms error={errors.mensaje?.message} />
                  </div>
                  <button type="submit" className='flex items-center max-w-max py-3.5 px-7 mt-2 bg-black uppercase font-roboto font-bold text-xs text-cream tracking-[0.2em] hover:bg-accent transition-colors duration-200 '>
                        enviar
                  </button>
            </form>
      )
}

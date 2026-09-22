import React from 'react'
import PageOrigin from './components/organisms/PageHome'
import PagePhilosophy from '../pagePhilosophy/page'
import PageProjects from '../pageProjects/page'
import PageStudy from '../pageStudy/page'
import PageContact from '../pageContact/page'

export default function PageHome() {
  return (
    <section className="">
      <PageOrigin />
      <PagePhilosophy />
      <PageProjects />
      <PageStudy />
      <PageContact />
    </section>
  )
}

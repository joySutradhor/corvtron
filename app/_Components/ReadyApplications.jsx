import React from 'react'
import Applicatoins from './Applicatoins/Applicatoins'

export default function ReadyApplications () {
  return (
    <section className='section__top'>
      <div className='section__header'>
        <h2 className='heading_two  '>Ready-made applications templates</h2>
        <p className='heading__para'>
          Why start from scratch? Swipe, select, and set your robot in motion
          with modular apps.
        </p>
      </div>

      <div className='max-w-7xl mx-auto mt-20 '>
        <Applicatoins />
      </div>
    </section>
  )
}

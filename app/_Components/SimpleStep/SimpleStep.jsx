'use client'

import React, { useState } from 'react'
import { HiSquare3Stack3D } from 'react-icons/hi2'
import { SiGoogleplay } from 'react-icons/si'
import { FaConnectdevelop } from 'react-icons/fa'

export default function SimpleStep () {
  const [activeTab, setActiveTab] = useState('connect')

  const steps = [
    {
      id: 'connect',
      title: 'Connect',
      desc: 'Cross-brand compatibility for seamless integration of robots, machines and more.',
      icon: <FaConnectdevelop className='text-2xl text-green-400' />,
      video:
        'https://cdn.prod.website-files.com/64eda916ec10005d85a2aa19/64fafb70a05c08386b65be76_Film%202%20-%20RiFLEX%20-%20Product%20Explainer%20-%20Cutdown%20-%20Connect-transcode.mp4'
    },
    {
      id: 'configure',
      title: 'Configure',
      desc: 'Easily configure your workflow using drag-and-drop components.',
      icon: <HiSquare3Stack3D className='text-2xl text-green-400' />,
      video:
        'https://cdn.prod.website-files.com/64eda916ec10005d85a2aa19/64fafb7e628acf6135a9405a_Film%202%20-%20RiFLEX%20-%20Product%20Explainer%20-%20Cutdown%20-%20Configure-transcode.mp4'
    },
    {
      id: 'run',
      title: 'Run',
      desc: 'Execute tasks instantly with automated robot management.',
      icon: <SiGoogleplay className='text-2xl text-green-400' />,
      video:
        'https://cdn.prod.website-files.com/64eda916ec10005d85a2aa19/64fafb92d188fecfe86213f1_Film%202%20-%20RiFLEX%20-%20Product%20Explainer%20-%20Cutdown%20-%20Run-transcode.mp4'
    }
  ]

  return (
    <section className='section__top text-white '>
      <div className='xl:max-w-[80%] mx-auto '>
        <h2 className='heading_two text-center mb-[5vh] lg:mb-[10vh]'>
          Get started in <span className='gradient__text'>3 simple steps</span>
        </h2>

        <div className='grid lg:grid-cols-2 gap-10 items-center'>
          {/* Tabs */}
          <div className='flex flex-col gap-6'>
            {steps.map(step => (
              <div
                key={step.id}
                onClick={() => setActiveTab(step.id)}
                className={`cursor-pointer flex items-start gap-4 rounded-xl p-6 transition-all duration-300 ${
                  activeTab === step.id
                    ? 'border border-white/10 bg-[#131315]'
                    : 'border border-transparent hover:border-white/10'
                }`}
              >
                <div
                  className={`p-3 rounded-lg ${
                    activeTab === step.id ? 'bg-green-400/10' : 'bg-white/5'
                  }`}
                >
                  {step.icon}
                </div>

                <div>
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      activeTab === step.id ? 'text-green-400' : 'text-white'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className='text-white/70'>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Video Section */}
          <div className='rounded-2xl overflow-hidden shadow-lg border border-white/10'>
            <video
              key={activeTab}
              src={steps.find(step => step.id === activeTab)?.video || ''}
              autoPlay
              loop
              muted
              className='w-full h-[400px] object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

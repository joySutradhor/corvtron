import Image from 'next/image'
import React from 'react'

export default function Stories () {
  // ✅ Card Data Array
  const storiesData = [
    {
      id: 1,
      title: 'XtendR for extended reach of robots',
      description:
        'A plug&produce solution for cobot applications demanding extended operational reach.',
      image:
        'https://cdn.prod.website-files.com/64ef5debb25839fcb85ba10c/64ff85ca1276ce9122821b39_XtendR-p-1080.jpeg'
    },
    {
      id: 2,
      title: 'FlexLink improves assembly line performance',
      description:
        'An advanced automation setup that increased throughput while minimizing downtime.',
      image:
        'https://cdn.prod.website-files.com/64ef5debb25839fcb85ba10c/672b91ebad14699520ede63e_Robot_Factory-p-1080.jpg'
    },
    {
      id: 3,
      title: 'UR robots revolutionize material handling',
      description:
        'A flexible and reliable system deployed to boost efficiency across logistics operations.',
      image:
        'https://cdn.prod.website-files.com/64ef5debb25839fcb85ba10c/6511750d08686ec67ce622dd_case4-p-1080.webp'
    }
  ]

  return (
    <div className='section__top relative overflow-hidden'>
      {/* Background Layer */}
      <div
        className='absolute top-[40vh] right-[15vw] w-full h-full bg-no-repeat bg-top opacity-50 z-0'
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/64eda916ec10005d85a2aa19/64ef89bac8fc6406391a9af0_Cases_BackgroundGrid.svg')",
        //   backgroundSize: 'cover'
        }}
      ></div>

      {/* Main Content */}
      <div className='relative r__stories__container'>
        {/* Left Section */}
        <div className='relative space-y-[5vh] lg:space-y-0'>
          <div>
            <p className='heading__five !text-[#02DE18] mb-3'>
              Success stories
            </p>
            <h2 className='heading_two'>
              Discover how our products are used in the real world.
            </h2>
          </div>

          {/* Highlighted Story */}
          <div className='bg-[#131315] border border-white/10 rounded w-full lg:absolute top-[55vh] -right-[20vw]  backdrop-blur-sm'>
            <Image
              src={storiesData[0].image}
              height={800}
              width={800}
              alt={storiesData[0].title}
              className='object-cover h-[45vh] rounded-t'
            />
            <div className='py-[3vh] px-[5vw] lg:px-[1vw]'>
              <h3 className='heading__four pb-[2vh]'>
                {storiesData[0].title}
              </h3>
              <p className='base__text'>{storiesData[0].description}</p>
            </div>
          </div>
        </div>

        {/* Right Section Cards */}
        <div className='space-y-[5vh] lg:space-y-[10vh]'>
          {storiesData.slice(1).map(story => (
            <div
              key={story.id}
              className=' bg-[#131315] border border-white/10 rounded   backdrop-blur-sm'
            >
              <Image
                src={story.image}
                height={800}
                width={800}
                alt={story.title}
                className='object-cover h-[45vh] rounded-t'
              />
              <div className='py-[3vh] px-[5vw] lg:px-[1vw]'>
                <h3 className='heading__four pb-[2vh]'>{story.title}</h3>
                <p className='base__text'>{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

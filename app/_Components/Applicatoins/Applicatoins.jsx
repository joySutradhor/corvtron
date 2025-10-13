import React from 'react'
import Number from '../utilities/Number'

export default function Applicatoins () {
  return (
    <section >
      <div>
        <div className='r__application__parent__grid  r__application__border relative'>
          <div className='pr-[10vw] '>
            <h3 className='heading__three'>Machine Tending</h3>
            <p className='base__text mt-4'>
              Plug&Produce solution for machine tending. Coordinate CNC machine
              and robot in a single app.
            </p>

            <div className='absolute top-5 right-5 lg:left-5'>
              <div className='flex items-center gap-x-2.5'>
                <p className='text-sm font-medium text-white'>01</p>
                <p className='size-2 rounded-full bg-[#02DE18]'></p>
              </div>
            </div>
          </div>

          <div>
            <video
              src='https://cdn.prod.website-files.com/64eda916ec10005d85a2aa19/652e43f8b02408200403c9d9_Website_Machine_Tending-transcode.mp4'
              autoPlay
              loop
              muted
              className='r__application__video'
            />
          </div>
        </div>

        <div className='r__application__parent__grid mt-5'>
          <div className='r__application__border'>
            <div>
              <video
                src='https://cdn.prod.website-files.com/64eda916ec10005d85a2aa19/652e43ff3007651868a29517_Website_Pick_Place-transcode.mp4'
                autoPlay
                loop
                muted
                className='r__application__video'
              />
            </div>
            <div className='r__application__content__gap relative'>
              <h3 className='heading__three'>Pick & Place</h3>
              <p className='base__text mt-4'>
                Quick robot training to transition smoothly between production
                batches.
              </p>

              <div>
                <Number number='02' />
              </div>
            </div>
          </div>
          <div className='  r__application__border '>
            <div>
              <video
                src='https://cdn.prod.website-files.com/64eda916ec10005d85a2aa19/652e44063a347ae481ea5631_Website_Palletizing-transcode.mp4'
                autoPlay
                loop
                muted
                className='r__application__video'
              />
            </div>
            <div className='r__application__content__gap relative'>
              <h3 className='heading__three'>Palletizing</h3>
              <p className='base__text mt-4'>
                Select a palletizing template or craft your own. RiFLEX unifies
                all devices in action.
              </p>

              <div>
                <Number number='03' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

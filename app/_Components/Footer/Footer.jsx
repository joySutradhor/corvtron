import React from 'react'

export default function Footer () {
  return (
    <footer className="section__top   text-white">
      <div className='r__footer__conatainer'>
        <div>
          <h2 className='heading_two  mb-[10vh]'>RiACT</h2>
          <p className='heading__five mb-2'>We participate in SMV:PRO</p>
          <p className='base__text mb-4'>
            As part of our involvement in SMV:PRO, we have the opportunity to
            apply for subsidies for private advisory services aimed at
            strengthening our company's strategy, management, and organizational
            development, among other areas. Throughout the process, we will
            receive assistance from an impartial business developer affiliated
            with our regional Business House.
          </p>
          <address className='not-italic base__text  mb-4 mt-[10vh] '>
            A. C. Meyers Vænge
            <br />
            2450, Copenhagen
            <br />
            CVR: DK40074139
            <br />
            <a href='mailto:info@riact.eu' className='text-white underline'>
              info@riact.eu
            </a>
          </address>
          <button className='r__position__text'>
            🔴 No open positions
          </button>
        </div>

        <div>
          <div className=''>
            <div>
              <p className='heading__four '>
                Universal operating system for industrial robots.
              </p>
            </div>
            <div>
              <img src='https://cdn.prod.website-files.com/64eda916ec10005d85a2aa19/65f44430497c516db17858a4_EN_Co-fundedbytheEU_RGB_WHITE-p-800.png' alt='EU Flag' className='md:h-20 lg:h-24 my-[5vh] object-cover' />
              
            </div>
          </div>

          <div className='grid grid-cols-2 gap-10'>
            <div>
              <h4 className='heading__five mb-5'>Overview</h4>
              <ul className='space-y-1 base__text'>
                <li>
                  <a href='#' className='r__footer__list__hover'>
                    Applications
                  </a>
                </li>
                <li>
                  <a href='#' className='r__footer__list__hover'>
                    Cases
                  </a>
                </li>
                <li>
                  <a href='#' className='r__footer__list__hover'>
                    How it works
                  </a>
                </li>
                <li>
                  <a href='#' className='r__footer__list__hover'>
                    Ecosystem
                  </a>
                </li>
                <li>
                  <a href='#' className='r__footer__list__hover'>
                    Products
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='heading__five mb-5'>Social</h4>
              <ul className='space-y-1 base__text '>
                <li>
                  <a href='#' className='r__footer__list__hover'>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href='#' className='r__footer__list__hover'>
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=' flex justify-between items-center text-sm mb-[5vh] mt-[1.5vh] '>
        <div>
            &copy; RiACT 2024
        </div>
        <p>Jobs</p>
      </div>
    </footer>
  )
}

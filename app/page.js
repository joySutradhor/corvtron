import React from 'react'
import StatsSection from './_Components/StatsSection'
import ReadyApplications from './_Components/ReadyApplications'
import Stories from './_Components/Stories/Stories'
import TopTier from './_Components/TopTier/TopTier'
import GetStarted from './_Components/GetStarted/GetStarted'
import Footer from './_Components/Footer/Footer'
import StayLoop from './_Components/StayLoop/StayLoop'
import Intregration from './_Components/Intregration/Intregration'
import SimpleStep from './_Components/SimpleStep/SimpleStep'
import Accelerate from './_Components/Accelerate/Accelerate'

export default function page () {
  return (
    <section>
      <StatsSection />
      <ReadyApplications />
      <Stories />
      <TopTier />
      <SimpleStep />
      <Accelerate />
      <Intregration />
      <GetStarted />
      <StayLoop />
      <Footer />
      
    </section>
  )
}

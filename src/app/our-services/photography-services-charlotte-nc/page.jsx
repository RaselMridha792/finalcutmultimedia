import MyGallery from '@/components/MyGallery'
import MainServices from '@/components/services/MainServices'
import OurWork from '@/components/services/OurWork'
import PhotoDetails from '@/components/services/photography/PhotoDetails'
import PhotographyServices from '@/components/services/photography/PhotographyServices'
import PhotoHero from '@/components/services/photography/PhotoHero'
import StorySection from '@/components/services/StorySection'
import React from 'react'

export default function page() {
  return (
    <div>
        <PhotoHero></PhotoHero>
        <PhotoDetails></PhotoDetails>
        <PhotographyServices></PhotographyServices>
        <MainServices></MainServices>
        <MyGallery></MyGallery>
        <OurWork></OurWork>
        <StorySection></StorySection>
    </div>
  )
}

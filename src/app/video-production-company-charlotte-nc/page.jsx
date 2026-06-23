import ServicesGrid from '@/components/home/ServicesGrid'
import MyGallery from '@/components/MyGallery'
import ConsultationBooking from '@/components/video-production-company-charlotte-nc/ConsultationBooking'
import MapSection from '@/components/video-production-company-charlotte-nc/MapSection'
import VideoProductionServices from '@/components/video-production-company-charlotte-nc/ProductionServices'
import ServicesShowcase from '@/components/video-production-company-charlotte-nc/ServicesShowcase'
import VideoProductionHero from '@/components/video-production-company-charlotte-nc/VideoProductionHero'
import React from 'react'

export default function page() {
  return (
    <div>
        <VideoProductionHero></VideoProductionHero>
        <VideoProductionServices></VideoProductionServices>
        <ServicesGrid></ServicesGrid>
         <ServicesShowcase></ServicesShowcase>
        <MyGallery></MyGallery>
        <ConsultationBooking></ConsultationBooking>
        <MapSection></MapSection>
       
    </div>
  )
}

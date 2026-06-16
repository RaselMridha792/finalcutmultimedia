import AboutSection from "@/components/home/About";
import ClientMarquee from "@/components/home/ClientMarquee";
import ContactSection from "@/components/home/ContactSection";
import HeroSection from "@/components/home/Hero";
import ProcessSection from "@/components/home/ProcessSection";
import RecentPostsSection from "@/components/home/RecentPost";
import ServicesGrid from "@/components/home/ServicesGrid";
import SocialGallery from "@/components/home/SocialGallery";
import StatsCounter from "@/components/home/StatsCounter";
import TestimonialSection from "@/components/home/TestimonialSection";
import VideoGallery from "@/components/home/VideoGallery";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <VideoGallery></VideoGallery>
      <StatsCounter></StatsCounter>
      <ServicesGrid></ServicesGrid>
      <TestimonialSection></TestimonialSection>
      <ProcessSection></ProcessSection>
      <ClientMarquee></ClientMarquee>
      <RecentPostsSection></RecentPostsSection>
      <SocialGallery></SocialGallery>
      <ContactSection></ContactSection>
    </main>
  );
}

import Navbar from "@/components/Universals/Navbar";
import SocialSidebar from "@/components/Universals/SocialSidebar";
import ContactUs from "@/components/Universals/ContactUs";
import ChatWithUs from "@/components/Universals/ChatWithUs";
import Hero from "@/app/home/Hero";
import Stats from "@/app/home/Stats";
import SpotlightProject from "@/app/home/SpotlightProject";
import HowWeDoIt from "@/app/home/HowWeDoIt";
import CTA from "@/components/Universals/CTA";
import HowItWorks from "@/app/home/HowItWorks";
import WorkInAction from "@/app/home/WorkInAction";
import Quote from "@/app/home/Quote";
import MemberSpotlight from "@/app/home/MemberSpotlight";
import DonateBanner from "@/components/Universals/DonateBanner";
import Partners from "@/app/home/Partners";
import Footer from "@/components/Universals/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <ContactUs />
      <ChatWithUs />
      <Hero />
      <Stats />
      <SpotlightProject />
      <HowWeDoIt/>
      <CTA />
      <HowItWorks />
      <WorkInAction />
      <Quote />
      <MemberSpotlight />
      <DonateBanner />
      <Partners />
      <Footer />
    </>
  );
}

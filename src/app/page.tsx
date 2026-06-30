import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PropertyStats from "@/components/PropertyStats";
import PropertyIntro from "@/components/PropertyIntro";
import CabinSelector from "@/components/CabinSelector";
import ImageBreak from "@/components/ImageBreak";
import CreekExperience from "@/components/CreekExperience";
import PhotoMosaic from "@/components/PhotoMosaic";
import WeddingWeekend from "@/components/WeddingWeekend";
import Amenities from "@/components/Amenities";
import Reviews from "@/components/Reviews";
import NearbyArea from "@/components/NearbyArea";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PropertyStats />
        <PropertyIntro />
        <CabinSelector />
        <ImageBreak index={0} />
        <CreekExperience />
        <PhotoMosaic />
        <WeddingWeekend />
        <Amenities />
        <Reviews />
        <NearbyArea />
        <ImageBreak index={1} />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

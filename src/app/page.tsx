import ServiceSlider from "@/components/HomePage/ServiceSlider";
import Ideas from "@/components/HomePage/Ideas";
import WeWork from "@/components/HomePage/WeWork";
import FirstSection from "@/components/HomePage/FirstSection";
import AboutSection from "@/components/HomePage/AboutSection";

export default function Home() {
  return (
    <>
        <FirstSection/>
      <ServiceSlider />
        <AboutSection/>
      <Ideas />
      {/*<WeWork />*/}
    </>
  );
}

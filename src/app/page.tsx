import ServiceSlider from "@/components/HomePage/ServiceSlider";
import Projects from "@/components/HomePage/Projects";
import WeWork from "@/components/HomePage/WeWork";
import FirstSection from "@/components/HomePage/FirstSection";
import AboutSection from "@/components/HomePage/AboutSection";

export default function Home() {
  return (
    <>
        <FirstSection/>
        <AboutSection/>
        <ServiceSlider />
      <Projects />
      {/*<WeWork />*/}
    </>
  );
}

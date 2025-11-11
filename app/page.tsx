import Image from "next/image";
import Hero_section from '../components/Pages/Home/Hero_section/Hero_section'
import Hero_Section from "../components/Pages/Home/Hero_section/Hero_section";
import Service from '../components/Pages/Home/Service/Service'

export default function Home() {
  return (
    <div>
        <Hero_Section></Hero_Section>
        <Service></Service>

    </div>
  );
}

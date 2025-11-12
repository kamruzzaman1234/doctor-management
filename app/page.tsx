import Image from "next/image";
// import Hero_section from '../components/Pages/Home/Hero_section/Hero_section'
import Hero_Section from "../components/Pages/Home/Hero_section/Hero_section";
import Service from '../components/Pages/Home/Service/Service';
import Activity from '../components/Pages/Home/Activity/Activity';
import Facility from '../components/Pages/Home/Facility/Facility';
import DemoVideo from '../components/Pages/Home/DemoVideo/DemoVideo';
import TopDoc from '../components/Pages/Home/TopDoc/TopDoc';
import BookAppointment from '../components/Pages/Home/BookAppointment/BookAppointment'

export default function Home() {
  return (
    <div>
        <Hero_Section></Hero_Section>
        <TopDoc></TopDoc>
        <Service></Service>
         <Facility></Facility>
        <Activity></Activity>
       
        <DemoVideo></DemoVideo>
        
        <BookAppointment></BookAppointment>

    </div>
  );
}

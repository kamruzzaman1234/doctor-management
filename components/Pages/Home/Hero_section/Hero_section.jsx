"use client";
import { TbNurse } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";

const Hero_Section  =()=>{
    return(
        <div className="py-[80px]">
            <div className="max-w-6xl mx-auto w-full">
                <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 relative px-5 py-10 lg:py-16">
  {/* LEFT CONTENT */}
  <div className="flex flex-col gap-4 max-w-[500px] w-full text-center lg:text-left">
    <h4 className="text-slate-700 uppercase tracking-wide">
      Welcome to our online helpline platform
    </h4>
    <h1 className="text-3xl lg:text-5xl text-slate-900 font-bold uppercase leading-tight">
      Online Doctor Helpline Center
    </h1>
    <p className="text-slate-700 text-sm lg:text-base leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
      tristique eros, nec bibendum risus. Get quick online medical advice and
      schedule consultations easily through our secure platform.
    </p>
    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mt-2">
      <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg transition-all duration-300 uppercase">
        Check Now
      </button>
      <button className="bg-white border border-green-600 text-green-700 hover:bg-green-600 hover:text-white font-semibold px-5 py-2 rounded-lg transition-all duration-300 uppercase">
        Review Now
      </button>
    </div>
  </div>

  {/* RIGHT IMAGE */}
  <div className="relative max-w-[400px] lg:max-w-[550px] w-full">
    <div className="bg-green-100 rounded-full overflow-hidden shadow-lg transition-all duration-500 hover:scale-105">
      <img
        src="https://i.ibb.co.com/r2Lpj3yc/dc11.png"
        className="w-full h-full object-cover rounded-full"
        alt="Doctor"
      />
    </div>

    {/* FLOATING ICONS */}
    <div className="absolute top-[30px] left-[15%] animate-bounce">
      <TbNurse className="text-5xl lg:text-6xl text-green-500" />
    </div>
    <div className="absolute top-[20px] right-[10%] animate-pulse">
      <MdOutlineDesignServices className="text-5xl lg:text-6xl text-green-500" />
    </div>
    <div className="absolute bottom-[40px] left-[25%] animate-bounce">
      <RiCustomerServiceFill className="text-5xl lg:text-6xl text-green-500" />
    </div>
  </div>
</div>

            </div>
        </div>
    )
}
export default Hero_Section;
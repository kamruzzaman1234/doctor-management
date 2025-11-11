"use client";
import { TbNurse } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";

const Hero_Section  =()=>{
    return(
        <div className="py-[80px]">
            <div className="max-w-6xl mx-auto w-full">
                <div className="flex flex-col lg:flex-row justify-between items-center relative">
                   <div className="flex flex-col gap-2 max-w-[500px] w-full">
                        <h4 className="text-slate-700 uppercase">welcome to our online helpline platform</h4>
                        <h1 className="text-3xl text-slate-900  font-bold uppercase">Online Doctor helpline center</h1>
                        <p className="text-slate-700">Loream ispum dollar sit amet and conceptetur and other site for the loran
                            Loream ispum dollar sit amet and conceptetur and other site for the loran
                            Loream ispum dollar sit amet and conceptetur and other site for the loran
                        </p>
                        <div className="flex gap-2 ">
                            <button className="btn btn-success uppercase font-bold text-green-200">Check Now</button>
                            <button className="btn btn-success uppercase font-bold text-green-200">Review Now</button>
                        </div>
                   </div>

                     <div className="flex flex-col gap-4 max-w-[600px] w-full bg-green-100 rounded-full">
                       <img src="https://i.ibb.co.com/r2Lpj3yc/dc11.png"
                       className="w-full h-full rounded-full" alt="" />
                   </div>
                   <div className="absolute top-[40px] left-[50%]"> 
                        <TbNurse className="text-6xl text-green-500"/>
                   </div>
                    <div className="absolute top-0 left-[60%]"> 
                        <MdOutlineDesignServices className="text-6xl text-green-500"/>
                   </div>
                   <div className="absolute top[70px] left-[45%]">
                        <RiCustomerServiceFill className="text-6xl text-green-500"/>
                   </div>
                   
                  
                </div>
            </div>
        </div>
    )
}
export default Hero_Section;
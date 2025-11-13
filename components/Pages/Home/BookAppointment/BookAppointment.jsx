"use client";

import Link from "next/link";

const BookAppointment = ()=>{
    return(
        <div className="py-[80px] bg-gray-200">
            <div className="px-[20px] lg:px-0 relative max-w-7xl w-full mx-auto">
                <div className="flex justify-between  items-center">
                    <div className="w-full lg:w-[50%] space-y-5">
                        <h2 className="text-5xl font-bold text-slate-700">Book Appointment 
                        With 100+ Trusted Doctors</h2>
                       <Link href={"/"} className="btn border-2 text-xl font-normal uppercase
                        border-green-700 rounded-lg">Create Account</Link>
                    </div>
                   
                </div>

                 <div className="w-full hidden lg:block absolute bottom-[-50px] right-0 lg:w-[50%]">
                        <img src="https://i.ibb.co.com/r2Lpj3yc/dc11.png" alt="" />
                    </div>
                
            </div>
        </div>  
    )
}
export default BookAppointment;
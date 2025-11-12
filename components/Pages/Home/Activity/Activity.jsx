"use client";
import { GiTimeBomb } from "react-icons/gi";
import { FaUserNurse } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";

const Activity = ()=>{
    return(
        <div className="py-[80px]">
            <div className="max-w-7xl w-full mx-auto px-20px lg:px-0">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
                    <div className="flex flex-col justify-center items-center space-y-2 py-4
                     border-t-4 border-green-400 rounded-[30px]">
                        <div>
                            <GiTimeBomb className="text-7xl font-bold text-green-400"/>
                        </div>
                        <div className="text-center space-y-1">
                            <h2 className="text-2xl text-slate-800 fomt-semibold">10 Minutes</h2>
                            <h4 className="text-xl text-slate-600">Avarage 10 minute wait</h4>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center space-y-2 py-4
                     border-t-4 border-green-400 rounded-[30px]">
                        <div>
                            <FaUserNurse className="text-7xl font-bold text-blue-400"/>
                        </div>
                        <div className="text-center space-y-1">
                            <h2 className="text-2xl text-slate-800 fomt-semibold">1700+</h2>
                            <h4 className="text-xl text-slate-600">BMDC valid doctor</h4>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center space-y-2 py-4
                     border-t-4 border-green-400 rounded-[30px]">
                        <div>
                            <FaPeopleGroup  className="text-7xl font-bold text-red-400"/>
                        </div>
                        <div className="text-center space-y-1">
                            <h2 className="text-2xl text-slate-800 fomt-semibold">700k+</h2>
                            <h4 className="text-xl text-slate-600">People have trusted us with their health</h4>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-2 py-4
                     border-t-4 border-green-400 rounded-[30px]">
                        <div>
                            <IoStar className="text-7xl font-bold text-yellow-400"/>
                        </div>
                        <div className="text-center space-y-1">
                            <h2 className="text-2xl text-slate-800 fomt-semibold">95%</h2>
                            <h4 className="text-xl text-slate-600">Users gave 5 star rating</h4>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-2 py-4
                     border-t-4 border-green-400 rounded-[30px] shadow-lg">
                        <div>
                            <GiTimeBomb className="text-7xl font-bold text-green-400"/>
                        </div>
                        <div className="text-center space-y-1">
                            <h2 className="text-2xl text-slate-800 fomt-semibold">10 Minutes</h2>
                            <h4 className="text-xl text-slate-600">Avarage 10 minute wait</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Activity;
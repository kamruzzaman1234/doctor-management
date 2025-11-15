"use client";
import DocBanner from "../../components/Pages/Doctor_List/DocBanner/DocBanner";
import AllDoc from "../../components/Pages/Doctor_List/AllDoc/AllDoc";

const doctorList = ()=>{
    return(
        <div>
                <DocBanner></DocBanner>
                <AllDoc></AllDoc>

        </div>
    )
}
export default doctorList;
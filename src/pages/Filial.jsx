import { useState } from "react";
import {FillialCom} from "../components/FillialCom";
import FIllialXarita from "../components/FIllialXarita";
import fillial from "../data/Fillial";
import FillialModal from "../components/FillialModal";

const Filial = () => {
    const [list, setList] = useState(fillial);
    const [tabs, setTabs] = useState(false);
    const [show, setShow] = useState(false);


  

    return (
        <div className=" pb-[50px] bg-[#fefefe] " >
            <div className="border-b h-[80px] text-center text-[40px] "> <span onClick={()=>setShow(true)} className="border p-3 rounded-lg cursor-pointer" >Modal </span> </div>

            <div className=" container mx-auto px-15px flex flex-col lg:flex-row justify-between lg:items-center gap-[30px] mb-[40px] mt-[80px]  ">
                <p className=" text-[38px] font-bold ">Filiallar</p>
                <div className="flex items-center w-full lg:w-auto gap-3">
                    <span
                        onClick={() => setTabs(false)}
                        className={` ${
                            tabs ? "bg-[#f1eff4] text-[#000] " : " text-white bg-[#51267d]"
                        } cursor-pointer grow lg:grow-0 border rounded-full  py-[10px] px-6 text-[20px] w-[160px] text-center block duration-300  active:scale-105 `}
                    >
                        Ro'yxat
                    </span>
                    <span
                        onClick={() => setTabs(true)}
                        className={` ${
                            tabs ? "bg-[#51267d] text-white " : "bg-[#f1eff4] text-[#000] "
                        }  cursor-pointer grow lg:grow-0 border rounded-full  py-[10px] px-6 text-[20px] w-[160px] text-center block duration-300 active:scale-105 `}
                    >
                        Xarita
                    </span>
                </div>
            </div>

            {tabs ? (
                <FIllialXarita />
            ) : (
                <div className=" container mx-auto">
                    {
                      list.map(item => (
                        <FillialCom key={item.name} item={item} />
                      ))
                    }
                </div>
            )}

            <FillialModal show={show} setShow={setShow} />
        </div>

        
    );
};

export default Filial;

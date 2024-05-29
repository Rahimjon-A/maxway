import { MdOutlineLocationOn } from "react-icons/md";

export const FillialCom = ({ item }) => {
    return (
        <div className=" border p-4 max-w-[650px] rounded-2xl bg-white shadow-md mb-[20px] ">
            <div className="grid grid-cols-[2fr_1fr] w-full justify-between border-b pb-3 ">
                <p className="text-[24px] font-bold mb-1 "> {item.name} </p>
                <span className="text-end text-[#80d268] ">
                    {item.close} gacha ochiq
                </span>
                <p> {item.location} </p>
            </div>

            <div className="grid grid-cols-2 w-full justify-between mt-3 pb-3 ">
                <p className="text-[#808080] mb-1 ">Ish vaqti:</p>
                <span className="text-end text-[#808080] ">Telefon: </span>
                <p> Du-Yak: 10:00-{item.close} </p>
                <span className="text-end"> +998712005400 </span>
            </div>
        </div>
    );
};

export const FillialComSub = ({ item, setActive, active, setVal }) => {
    return (
        <div onClick={()=> { setActive(item.id); setVal(item.name)  }} className={` ${ active === item.id ? "border-[#51267d]" : null } cursor-pointer border bg-white bg- p-4 max-w-[650px] rounded-2xl  mb-[10px] `}>
            <div className="flex gap-2 items-center mb-1 font-semibold text-[18px] " >
                <MdOutlineLocationOn className="text-[#51267d] text-[20px] " ></MdOutlineLocationOn>
                {item.name}
            </div>
            <p className="text-[#808080] mb-1 " > {item.location} </p>
            <p className="text-[#7899eb] "> Restoran soat {item.close} da yopiladi</p>
        </div>
    );
};


export const XaritaModal = ({ item }) => {
    return (
        <div className="  p-2 w-[350px] rounded-2xl bg-white  mb-[20px] ">
            <div className=" w-full  border-b pb-3 ">
                <span className="text-[#80d268] block mb-1 ">
                    {item.close} gacha ochiq
                </span>
                <p className="text-[24px] font-bold mb-1 "> {item.name} </p>
                <p> {item.location} </p>
            </div>

            <div className="grid grid-cols-1 w-full justify-between mt-3 pb-3 ">
                <p className="text-[#808080] mb-2 ">Ish vaqti:</p>
                <p className="mb-[15px] text-[16px] font-medium " > Du-Yak: 10:00-{item.close} </p>

                <p className=" text-[#808080] mb-2 ">Telefon: </p>
                <span className="text-[16px] font-medium"> +998712005400 </span>
            </div>
        </div>
    );
};

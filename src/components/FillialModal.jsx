import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FillialComSub } from "./FillialCom";
import fillial from "../data/Fillial";
import FIllialXarita from "./FIllialXarita";

const FillialModal = ({ show, setShow }) => {
    const [modal, setModal] = useState(false);
    const [order, setOrder] = useState(true);
    const [search, setSearch] = useState(fillial);
    const [val, setVal] = useState("");
    const [active, setActive] = useState("");

    const searchBranch = () => {
        if (val.trim() === "") {
            setSearch(fillial);
        } else {
            const newList = fillial.filter((item) =>
                item.name.toLowerCase().includes(val.trim().toLowerCase())
            );
            setSearch(newList);
        }
    };

    useEffect(() => {
        searchBranch();
        if (!val) {
            setActive("");
        }
    }, [val]);

    useEffect(() => {
        if (show) {
            setModal(true);
        } else {
            setTimeout(() => setModal(false), 500);
        }
    }, [show]);

    return (
        <div
            className={` ${
                show ? "flex" : "hidden"
            } bg-[#363636b3] fixed z-40 top-0 left-0 w-full h-full justify-center items-center`}
        >
            <div
                className={` ${
                    modal ? "translate-y-0" : "translate-y-[100vh]"
                }  bg-white transition-all duration-500 p-6 rounded-xl `}
            >
                <div className="mb-4">
                    <div className="flex  justify-between ">
                        <p className=" text-[32px] font-bold ">
                            Qabul qilib olish turini tanlang
                        </p>
                        <span
                            onClick={() => setShow(false)}
                            className="  cursor-pointer text-end "
                        >
                            <IoCloseSharp className="text-[32px] text-end "></IoCloseSharp>
                        </span>
                    </div>
                    <p className="text-[#808080] text-[18px] ">
                        Real vaqt va joylashuvga mos menyuni ko'rish uchun
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col justify-between ">
                        <div>
                            <div className="grid grid-cols-2 gap-2 mb-3">
                                <span
                                    onClick={() => setOrder(false)}
                                    className={`border text-center hover:text-[#745297] transition-all  rounded-full cursor-pointer   py-3 text-[20px] ${
                                        order
                                            ? "bg-[#f6f4f2] text-[#919191]"
                                            : "bg-[#f1eff4] text-[#745297]"
                                    }`}
                                >
                                    Yetkazib berish
                                </span>
                                <span
                                    onClick={() => setOrder(true)}
                                    className={`border text-center hover:text-[#745297] transition-all  rounded-full cursor-pointer py-3 text-[20px] ${
                                        order
                                            ? "bg-[#f1eff4] text-[#745297]"
                                            : "bg-[#f6f4f2] text-[#919191] "
                                    } `}
                                >
                                    Olib ketish
                                </span>
                            </div>
                            <input
                                value={val}
                                onChange={(e) => setVal(e.target.value)}
                                type="search"
                                className="w-full mb-2 border outline-none px-4 py-3 rounded-xl "
                                placeholder={` ${
                                    order
                                        ? "Restoran nomi bo'yicha qidirish"
                                        : "Yetkazib berish manzili"
                                } `}
                            />
                        </div>

                        <div className=" max-h-[200px] md:max-h-[300px] h-full md:h-full  overflow-scroll ">
                            {order ? (
                                <div>
                                    {search.map((item) => (
                                        <FillialComSub
                                            key={item.name}
                                            setActive={setActive}
                                            setVal={setVal}
                                            active={active}
                                            item={item}
                                        />
                                    ))}
                                </div>
                            ) : null}
                        </div>

                        <button
                            className={`bg-[#5a3184] hover:bg-opacity-80 transition-all text-white text-[18px] font-medium py-3 rounded-full `}
                        >
                            Belgilash
                        </button>
                    </div>

                    <div className=" rounded-xl w-[550px] max-h-[200px] md:max-h-[500px] overflow-hidden">
                        <FIllialXarita/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FillialModal;

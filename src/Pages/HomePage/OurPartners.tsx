import { useState, } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface PartnersData {
    name: string;
    img: string;
    link: string;
}

const partners: PartnersData[] = [
    {
        name: "Merck",
        img: "/HomePageImgs/Merck.webp",
        link: "https://www.merckgroup.com/en"
    },
    {
        name: "Boehringer Ingelheim",
        img: "/HomePageImgs/Boehringer-Ingelheim.webp",
        link: "https://www.boehringer-ingelheim.com/au/"
    },
    {
        name: "Julphar",
        img: "/HomePageImgs/Julphar.webp",
        link: "https://www.julphar.net/"
    },
    {
        name: "Lundbeck",
        img: "/HomePageImgs/Lundbeck.webp",
        link: "http://www.lundbeck.com/global"
    },
    {
        name: "Hikma",
        img: "/HomePageImgs/Hikma.webp",
        link: "https://www.hikma.com/home/"
    },
    {
        name: "Thermo Fisher",
        img: "/HomePageImgs/Thermo-Fisher.webp",
        link: "https://www.thermofisher.com/ru/ru/home/industrial/microbiology.html"
    },
    {
        name: "STADA",
        img: "/HomePageImgs/STADA.webp",
        link: "https://www.stada.com/"
    },
    {
        name: "Sanofi",
        img: "/HomePageImgs/Sanofi.webp",
        link: "https://www.sanofi.com/en"
    },
    {
        name: "Ram Pharma",
        img: "/HomePageImgs/Ram-Pharma.webp",
        link: "https://rampharma.info/"
    },
    {
        name: "Alcon",
        img: "/HomePageImgs/Alcon.webp",
        link: "https://www.alcon.com/"
    },
    {
        name: "D.P.P.C",
        img: "/HomePageImgs/dppc.webp",
        link: "https://dppcco.com/?lang=en"
    },
    {
        name: "D.P.P.C",
        img: "/HomePageImgs/dppc.webp",
        link: "https://dppcco.com/?lang=en"
    },
]




export default function OurPartners() {
    const [index, setIndex] = useState<number>(0)

    return (
        <div className="py-4 flex flex-col items-center ">
            <h1 className="text-[#000] font-bold text-2xl lg:text-3xl 2xl:text-5xl border-l-[5px] border-[#0c9c4a] lg:mt-0 mt-10 pl-4 mb-6 ">Our Partners</h1>

            <div className="flex lg:gap-2 w-full justify-center items-center select-none">

                <FaArrowLeft className="text-2xl cursor-pointer"
                    onClick={() => {
                        if (index - 1 < 0) setIndex(0)
                        else setIndex(index - 1)
                    }} />
                <img className="lg:w-[22%] w-[92%] aspect-[2/1] object-contain border-4 rounded-xl border-[#000] cursor-pointer" src={`${partners[index].img}`} alt={`partners ${index + 1} img`} onClick={() => window.open(partners[index].link, "_blank")} />
                <img className="w-[22%] lg:block hidden aspect-[2/1] object-contain border-4 rounded-xl border-[#000] cursor-pointer" src={`${partners[index + 1].img}`} alt={`partners ${index + 2} img`} onClick={() => window.open(partners[index + 1].link, "_blank")} />
                <img className="w-[22%] lg:block hidden aspect-[2/1] object-contain border-4 rounded-xl border-[#000] cursor-pointer" src={`${partners[index + 2].img}`} alt={`partners ${index + 3} img`} onClick={() => window.open(partners[index + 2].link, "_blank")} />
                <img className="w-[22%] lg:block hidden aspect-[2/1] object-contain border-4 rounded-xl border-[#000] cursor-pointer" src={`${partners[index + 3].img}`} alt={`partners ${index + 4} img`} onClick={() => window.open(partners[index + 3].link, "_blank")} />
                <FaArrowRight className="text-2xl cursor-pointer"
                    onClick={() => {
                        if (index + 3 === partners.length - 1) setIndex(index)
                        else setIndex(index + 1)
                    }} />

            </div>
        </div>
    );
}
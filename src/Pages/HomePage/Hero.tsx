import { useNavigate } from "react-router-dom";
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoArrowRedo } from "react-icons/io5";

export default function Hero() {

    let navigate = useNavigate();



    return (
        <div className="w-full h-[100vh] bg-[url(/HomePageImgs/HeroBg.webp)] bg-cover flex flex-col justify-center items-center">

            <h1 className="font-bold text-base lg:text-lg 2xl:text-2xl mt-8">Ard Al-ganatian Company</h1>
            <p className="text-[#fff] text-balance text-center max-w-[70vw] text-xs lg:text-base 2xl:text-xl mt-4">One of the leading healthcare distributors in Yemen that specializes in the sales and distribution of pharmaceuticals, medical appliances, and other medical supplies. </p>
            <img className="w-[30vw]  mt-4 hidden md:block " src="/HomePageImgs/HeroMdImg.webp" alt="HeroMdImg" />

            <div className="flex justify-center md:justify-between items-center  w-[90vw] mt-8">

                <div className=" hidden md:flex opacity-80 w-[30%] h-[40vh] bg-[url(/HomePageImgs/minHeroBg3.webp)] border-[#fff] border-4 bg-center bg-cover bg-no-repeat rounded-xl flex-col items-center shadow-[4px_4px_4px_0px] shadow-[#000]">
                    <button className="bg-[#fff] px-8 py-1 rounded-xl mt-4 font-bold text-base 2xl:text-xl">Our Achievement</button>
                    <p className="max-w-[80%]  mt-4 lg:text-sm 2xl:text-xl"><span className="text-[#0866FF]">Ard Al-Gantain</span> holds a strong market share of <span className="text-[#0866FF]">(9.99%)</span> among Yemen's <span className="text-[#0866FF]">370</span> pharmaceutical distributors.</p>
                </div>


                <div className="bg-[url(/HomePageImgs/minHeroBg2.webp)] bg-cover bg-no-repeat bg-center w-[80%] h-[40vh] md:w-[30%] md:h-[50vh] flex flex-col justify-around items-center border-[#fff] border-4 rounded-xl shadow-[4px_4px_4px_0px] shadow-[#000]">
                    <h1 className="text-[#3E5A69] font-bold text-base 2xl:text-xl mt-4">Contact information</h1>
                    <div className="grid grid-cols-12 grid-rows-6 mt-4">
                        <div className="col-start-2 row-start-5 row-span-2 col-span-2 text-3xl md:text-4xl cursor-pointer 2xl:text-6xl" onClick={() => window.open("https://protechies.netlify.app/", "_blank")}><MdEmail /></div>
                        <div className="col-start-3 row-start-2 row-span-2 col-span-2 text-3xl md:text-4xl cursor-pointer 2xl:text-6xl text-[#4267B2]" onClick={() => window.open("https://protechies.netlify.app/", "_blank")}><FaFacebook /></div>
                        <div className="col-start-6 row-start-1 row-span-2 col-span-2 text-3xl md:text-4xl cursor-pointer 2xl:text-6xl text-[#25D366]" onClick={() => window.open("https://protechies.netlify.app/", "_blank")}><FaWhatsapp /></div>
                        <div className="col-start-9 row-start-2 row-span-2 col-span-2 text-3xl md:text-4xl cursor-pointer 2xl:text-6xl text-[#1DA1F2]" onClick={() => window.open("https://protechies.netlify.app/", "_blank")} ><FaTwitter /></div>
                        <div className="col-start-10 row-start-5 row-span-2 col-span-2 text-3xl md:text-4xl cursor-pointer 2xl:text-6xl text-[#E1306C]" onClick={() => window.open("https://protechies.netlify.app/", "_blank")}><FaInstagram /></div>
                    </div>
                    <div className="rounded-3xl py-2 px-4 cursor-pointer bg-[#009BB0] text-[#fff] text-base 2xl:text-xl mb-2" onClick={() => { navigate("/ContactUs") }}>Contact us</div>
                </div>


                <div className="bg-[url(/HomePageImgs/minHeroBg3.webp)] bg-cover bg-no-repeat bg-center w-[30%] h-[40vh] hidden md:flex flex-col justify-center items-center border-[#fff] border-4 rounded-2xl shadow-[4px_4px_4px_0px] shadow-[#000]">

                    <div className="w-[60%] h-[33%] bg-[#E6EDF0] md:text-[0.5rem] 2xl:text-xs ml-20 -mb-4 rounded-xl z-20 pl-4 border-2 border-[#fff]">
                        <div className="flex gap-1 items-center mt-1">
                            <div className="w-2 h-2 rounded-full bg-[#FFFAFA] "></div>
                            <h1 className="text-[#0866FF]">CHAIRMAN’S MESSAGE</h1>
                        </div>
                        <p className="mt-1 font-bold">Abdo Al-Awdi</p>
                        <p className="text-[#3E5A69] max-w-[80%]">Chairman of Board of Directors</p>
                    </div>

                    <div className="w-[60%] h-[33%] bg-[#E6EDF0] md:text-[0.5rem] 2xl:text-xs rounded-xl ml-10 -mb-4 z-10  pl-4 border-2 border-[#fff]">
                        <div className="flex gap-1 items-center mt-4">
                            <div className="w-2 h-2 rounded-full bg-[#FFFAFA] "></div>
                            <h1 className="text-[#0866FF]">Our Vision</h1>
                        </div>
                        <p className="text-[#3E5A69] ">we aim to be Yemen's leading medicine provider.</p>
                    </div>

                    <div className="w-[60%] h-[33%] bg-[#E6EDF0] md:text-[0.5rem] 2xl:text-xs rounded-xl   pl-4 border-2 border-[#fff]">
                        <div className="flex gap-1 items-center mt-4">
                            <div className="w-2 h-2 rounded-full bg-[#FFFAFA] "></div>
                            <h1 className="text-[#0866FF]">Our Mission</h1>
                        </div>
                        <p className="text-[#3E5A69] ">leading supplier of global pharmaceuticals, competitively.</p>
                    </div>

                    <div className="cursor-pointer flex gap-2 justify-center items-center self-start ml-4" onClick={() => { navigate("/AboutUs") }}>
                        <h1 className=" text-sm">To Read more click here</h1>
                        <IoArrowRedo />
                    </div>

                </div>

            </div>
        </div>
    );
}
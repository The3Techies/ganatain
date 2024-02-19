import { useNavigate } from "react-router-dom";

export default function Hero() {

    let navigate = useNavigate();


    return (
        <div className="bg-[#FFFFFF] h-screen w-full flex justify-center">

            <div className="w-[90%] h-full flex justify-center">

                <div className="w-full md:w-[40%] h-full flex flex-col justify-center ">

                    <h1 className="text-[#3E5A69] lg:text-3xl 2xl:text-5xl font-bold">Success and Achievements</h1>
                    <p className="mt-4 text-balance lg:text-sm 2xl:text-lg pr-2">Success and achievements within our company are milestones that reflect our collective commitment, hard work, and the relentless pursuit of excellence. These accomplishments are not just numbers or awards, but a testament to our team's dedication to innovation and our unwavering drive to lead the industry forward.</p>
                    <button className="mt-8 p-2 w-40 bg-[#3E5A69] text-[#fff] rounded-lg" onClick={() => { navigate("/ContactUs") }}>Contact us</button>

                </div>

                <div className="md:block hidden w-[60%] h-full select-none">
                    <img className=" object-contain w-full h-full" src="/AchievementPageImgs/heroImg.webp" alt="hero Img" />
                </div>

            </div>

        </div>
    );
}
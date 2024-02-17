import { useNavigate } from "react-router-dom";

export default function AboutUs() {

  let navigate = useNavigate();

  interface AboutUsInfoData {
    title: string;
    info: string;
  }


  const AboutUsInfo: AboutUsInfoData[] = [
    {
      title: "Ranking",
      info: "Top Importer & Distributor"
    },
    {
      title: "13 Branches",
      info: "Nationwide Coverage"
    },
    {
      title: "13.4% Market Share",
      info: "Pharmaceutical Leader"
    },
    {
      title: "23 International Partners",
      info: "Global Collaboration"
    }
  ]


  const AboutUsInfoHtml = AboutUsInfo.map((section, index) => (
    <div key={index} className="w-[45%] h-[40%] bg-[#7FC2CB] rounded-lg text-[#000000] p-4 text-xs md:text-base lg:text-base 2xl:text-2xl flex flex-col gap-4 shadow-[1px_4px_4px_0px] shadow-[#7FC2CB]">
      <h1 className=" font-bold">{section.title}</h1>
      <p>{section.info}</p>
    </div>
  ))


  return (
    <div className="py-6 flex justify-center bg-[#F3F7F9] ">

      <div className="md:flex justify-between w-[90vw] ">

        <div className="bg-[#FFFFFF] rounded-xl md:w-[49%] p-10 flex flex-col shadow-[1px_4px_4px_0px] shadow-[#000000]">
          <h1 className="font-bold text-lg md:text-xl lg:text-2xl 2xl:text-3xl">About Us</h1>
          <p className="mt-2 text-[#009BB0] font-bold text-xs md:text-base lg:text-base 2xl:text-2xl">Ard Al-Ganatain Company: A Leader in Yemen's Healthcare Sector</p>
          <p className="mt-2 text-[#009BB0] text-xs md:text-base lg:text-base 2xl:text-2xl">Ard Al-Ganatain Company for pharmaceuticals and Medical appliances is one of the most leading companies operating in the field of health care in Yemen. Indeed, it is a pioneering company in the field of selling and distributing pharmaceuticals and medical appliances, and other medical supplies.
            Ard Al-Ganatain Company was established in 1987 in Yemen by its president and owner: Mr.Abdo Ali Al-Awdi and now represents nearly 23 international companies in the field of pharmaceutical and medical appliances ....</p>
          <button className="bg-[#3E5A69] text-[#FCFDFE] font-thin text-xs md:text-base lg:text-base 2xl:text-2xl py-2 px-12 rounded-2xl mt-2 self-end" onClick={() => { navigate("/AboutUs") }}>Read More</button>
        </div>



        <div className="md:w-[49%] flex flex-col justify-between ">
          <img className="rounded-xl w-full h-[40%] object-cover shadow-[1px_4px_4px_0px] shadow-[#000000] mt-4 md:mt-0" src="/HomePageImgs/aboutUs.webp" alt="about us img" />
          <div className="w-full aspect-square  md:h-[58%] flex flex-wrap justify-center items-center gap-x-4 bg-[#FFFFFF] rounded-xl shadow-[1px_4px_4px_0px] shadow-[#000000] mt-4 md:mt-0">
            {AboutUsInfoHtml}
          </div>
        </div>
        
      </div>

    </div>
  );
}
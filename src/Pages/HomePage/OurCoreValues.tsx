interface ValuesData {
    name: string;
    discretion: string;
    icon: string;
    bg: string;
}

const values: ValuesData[] = [
    {
        icon: "/HomePageImgs/PartnershipIcon.webp",
        name: "Partnership",
        discretion: "We improve the partnership with pharmaceutical and medical appliances manufacturers.",
        bg: "bg-[#009CC1]",
    },
    {
        icon: "/HomePageImgs/QualityIcon.webp",
        name: "Quality",
        discretion: "We commit to the highest standards of quality recognized in the manufacturing of pharmaceuticals",
        bg: "bg-[#A4D4FF]",
    },
    {
        icon: "/HomePageImgs/ExcellenceIcon.webp",
        name: "Excellence",
        discretion: "Adherence to the most professional practices in marketing pharmaceuticals.",
        bg: "bg-[#EC9922]",
    },
    {
        icon: "/HomePageImgs/PreparednessIcon.webp",
        name: "Preparedness and availability",
        discretion: "The most ideal utilization of available capabilities.",
        bg: "bg-[#00B1EB]",
    },
    {
        icon: "/HomePageImgs/CredibilityIcon.webp",
        name: "Credibility and accountability",
        discretion: "We maintain our credibility and submit ourselves to accountability.",
        bg: "bg-[#FF826E]",
    },
    {
        icon: "/HomePageImgs/TeamworkIcon.webp",
        name: "Teamwork",
        discretion: "We encourage teamwork and stand against unilateral acts and monopolization of knowledge",
        bg: "bg-[#FFBC41]",
    },
    {
        icon: "/HomePageImgs/OutstandingIcon.webp",
        name: "Outstanding responsiveness",
        discretion: "We always work on enhancing our response for the urgent need of medicine.",
        bg: "bg-[#99E6FC]",
    },
    {
        icon: "/HomePageImgs/JointIcon.webp",
        name: "Joint responsibility",
        discretion: "We ensure a complementary relationship between ourselves and all the stakeholders",
        bg: "bg-[#EFBE9C]",
    },
]

const valuesHtml = values.map((section, index) => (
    <div key={index} className="lg:w-[22%]  w-[48%]  flex flex-col items-center">
        <img className="w-[30%] aspect-square mb-4" src={section.icon} alt={"icon for " + section.name} />
        <div className={"w-full md:h-80 h-64 rounded-xl shadow-[1px_4px_4px_0px] shadow-[#000000] flex flex-col items-center  " + section.bg}>
            <div className="relative">
                <div className="border-l-[50px] border-l-transparent border-t-[75px] border-t-[#fff] border-r-[50px] border-r-transparent -mt-[1px] relative"></div>
                <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-6 h-6 bg-[#3E5A69] shadow-[4px_4px_4px_0px] shadow-[#000000]"></div>
            </div>
            <h1 className="text-center mt-2 text-[#3E5A69] font-bold text-sm md:text-lg lg:text-xl 2xl:text-2xl">{section.name}</h1>
            <p className="text-center mt-2 text-[#fff] max-w-[90%] text-xs md:text-sm lg:text-base 2xl:text-lg">{section.discretion}</p>

        </div>

    </div>
))


export default function OurCoreValues() {
    return (
        <div className="py-6 flex flex-col items-center bg-[#F3F7F9]">
            <h1 className="text-[#3E5A69] font-bold text-lg md:text-xl lg:text-2xl 2xl:text-3xl">Our Core Values</h1>

            <div className="w-[90%] mt-6">
                <div className="w-full flex flex-wrap justify-between gap-y-6">
                    {valuesHtml}
                </div>
            </div>


        </div>
    );
}
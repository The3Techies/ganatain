
interface AffiliatesData {
    img: string;
    name: string;
    discretion: string;
}


const affiliates: AffiliatesData[] = [
    {
        img: "/HomePageImgs/OurAffiliates1.webp",
        name: "Al-Yemen Al-Saeed for Trade & Agencies",
        discretion: "Beyond pharmaceuticals, our expansion includes Al-Yemen Al-Saeed for Trade & Agencies, marking our entry into the electricity sector. This diversification showcases our innovative approach to meeting the needs of modern Yemen",
    },
    {
        img: "/HomePageImgs/OurAffiliates2.webp",
        name: "Al-Yemen Al-Saeed for Trade & Agencies",
        discretion: "Beyond pharmaceuticals, our expansion includes Al-Yemen Al-Saeed for Trade & Agencies, marking our entry into the electricity sector. This diversification showcases our innovative approach to meeting the needs of modern Yemen",
    },
    {
        img: "/HomePageImgs/OurAffiliates3.webp",
        name: "Al-Yemen Al-Saeed for Trade & Agencies",
        discretion: "Beyond pharmaceuticals, our expansion includes Al-Yemen Al-Saeed for Trade & Agencies, marking our entry into the electricity sector. This diversification showcases our innovative approach to meeting the needs of modern Yemen",
    },
]


const affiliatesHtml = affiliates.map((section, index) => (
    <div key={index} className="md:w-[30%] w-full bg-[#FFFFFF] rounded-xl shadow-[1px_4px_4px_0px] shadow-[#000000] flex flex-col items-center py-4">

        <img className="w-[80%] aspect-square rounded-lg object-cover border-2 border-[#0C9C4A]" src={section.img} alt={"img for " + section.name} />
        <h1 className="text-center mt-2 max-w-[90%] text-[#3E5A69] font-bold text-sm md:text-base lg:text-lg 2xl:text-xl">{section.name}</h1>
        <p className="text-center  mt-2 text-[#3E5A69] max-w-[90%] text-xs md:text-xs lg:text-xs 2xl:text-base">{section.discretion}</p>

    </div>
))

export default function OurAffiliates() {
    return (
        <div className="py-6 flex flex-col items-center bg-[#F3F7F9]">
            <h1 className="text-[#3E5A69] font-bold text-lg md:text-xl lg:text-2xl 2xl:text-3xl border-l-4 pl-2 border-[#3E5A69]">Our Affiliates</h1>
            <p className="mt-2 text-center max-w-[75%] text-xs 2xl:text-lg"> Ard Al-Ganatain diversifies through key expansions: Nashwan Pharma in the pharmaceutical industry, Al-Yemen Al-Saeed Pharmacies for retail healthcare, and Al-Yemen Al-Saeed for Trade & Agencies in the electricity sector, showcasing our dynamic and multifaceted approach to business growth.</p>

            <div className="w-[90%] mt-6">
                <div className="w-full flex flex-wrap justify-between gap-y-6">
                    {affiliatesHtml}
                </div>
            </div>

        </div>
    );
}
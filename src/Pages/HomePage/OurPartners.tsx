
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
        name: "Terumo",
        img: "/HomePageImgs/Terumo.webp",
        link: "https://www.terumomedical.com/"
    },
    {
        name: "Al Andalous",
        img: "/HomePageImgs/Al-Andalous.webp",
        link: "https://www.alandalous.org/"
    },
    {
        name: "Novartis",
        img: "/HomePageImgs/Novartis.webp",
        link: "https://www.novartis.com/"
    },
    {
        name: "Dynamic",
        img: "/HomePageImgs/Dynamic.webp",
        link: "https://www.dynamictechnomedicals.com/"
    },
    {
        name: "Liptis",
        img: "/HomePageImgs/Liptis.webp",
        link: "http://www.liptis.com/cgi-sys/defaultwebpage.cgi"
    },
    {
        name: "Geratherm",
        img: "/HomePageImgs/Geratherm.webp",
        link: "https://www.geratherm.com/"
    },
    {
        name: "Prime Care Ortho",
        img: "/HomePageImgs/Prime-Care-Ortho.webp",
        link: "http://www.primecareortho.com/"
    },
    {
        name: "Pharma-International",
        img: "/HomePageImgs/Pharma-International.webp",
        link: "https://dppcco.com/?lang=en"
    },
    {
        name: "Qatar Pharma",
        img: "/HomePageImgs/Qatar-Pharma.webp",
        link: "https://qatarpharma.org/new/"
    },
    {
        name: "Medisal",
        img: "/HomePageImgs/Medisal.webp",
        link: "http://www.medisal.ae/"
    },
    {
        name: "P&G",
        img: "/HomePageImgs/P&G.webp",
        link: "https://us.pg.com/"
    },
    {
        name: "Vasmed",
        img: "/HomePageImgs/Vasmed.webp",
        link: "https://www.vasmedtech.com/live/"
    },
]


const partnersHtml = partners.map((section, index) => (
    <div key={index} className="md:w-[12.5%]  w-[25%] flex flex-col items-center cursor-pointer" onClick={() => window.open(section.link, "_blank")}>
        <img className="w-[90%] aspect-[2] object-contain" src={section.img} alt={"icon for " + section.name} />
        <p className="text-center text-[#3E5A69] text-xs lg:text-base">{section.name}</p>
    </div>
))



export default function OurPartners() {

    return (
        <div className="py-6 flex flex-col items-center bg-[#F3F7F9]">
            <h1 className="text-[#3E5A69] font-bold text-lg md:text-xl lg:text-2xl 2xl:text-3xl border-l-4 pl-2 border-[#3E5A69]">Who do we represent?</h1>
            <p className="mt-2 text-center max-w-[75%] text-xs 2xl:text-lg"> Ard Al-Ganatain Company represents numerous leading Arab and European pharmaceuticals and medical appliances companies in the field of producing pharmaceuticals and medical appliances which are:</p>

            <div className="w-[90%] bg-[#fff] mt-4 rounded-lg shadow-[1px_4px_4px_0px] shadow-[#000000] flex flex-wrap justify-center gap-y-2 py-4">
                {partnersHtml}
            </div>

        </div>
    );
}
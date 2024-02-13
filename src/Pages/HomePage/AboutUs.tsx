export default function AboutUs() {
  return (
    <div className="pt-4 flex flex-col-reverse lg:flex-row">

      <div className="lg:w-[50%] flex flex-col justify-center items-center">
        <img className="w-[90%] aspect-square rounded-xl object-cover" src="/HomePageImgs/aboutUs.webp" alt="aboutUs" />
        <button className="p-4 bg-[red] mt-4 rounded-full">Read more about us</button>
      </div>

      <div className="lg:w-[50%] text-balance mr-4 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 className="text-[#000] font-bold text-2xl lg:text-3xl 2xl:text-5xl border-l-[5px] border-[#0c9c4a] lg:mt-0 mt-10 pl-4 mb-6 ">About us</h1>
        <div>
          <p className="font-bold">Introduction to Our Company</p>
          <p>Ard Al-Ganatain Company, established in 1987 by Mr. Abdo Ali Al-Awdi, stands as a prominent player in Yemen's healthcare sector. This segment highlights the company's core activities in selling and distributing pharmaceuticals and medical appliances, along with its representation of 23 international companies.</p>
        </div>

        <div className="mt-4">
          <p className="font-bold">Growth and Expansion Over the Years</p>
          <p>This section delves into the significant growth and expansion experienced by Ard Al-Ganatain Company. It explores the company's journey since its inception, underlining the strategic vision and management methodologies that propelled it to the forefront. Special emphasis is given to the achievements, particularly securing the first position among pharmaceutical-importing companies since 2009.</p>
        </div>

        <div className="mt-4">
          <p className="font-bold">Achieving Distinction and Market Share</p>
          <p>Ard Al-Ganatain Company's current standing as a leading force in Yemen's pharmaceutical market is detailed in this part. It discusses the company's market share of 13.4%, its recognition as one of the best companies in Yemen, and the fame it has earned. The focus is on the professional principles and ethics that have underpinned its success and elevated its status in the Republic of Yemen.</p>
        </div>

      </div>
    </div>
  );
}
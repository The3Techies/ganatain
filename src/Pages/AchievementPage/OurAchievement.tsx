
export default function OurAchievement() {
  return (
    <div className="bg-[#FFFFFF] flex justify-center md:mt-4">

      <div className="w-[90%]">

        <h1 className="text-[#3E5A69] text-lg lg:text-3xl 2xl:text-5xl font-bold">Our Achievement</h1>

        <div className="flex w-full justify-between flex-col md:flex-row mt-2">
          <p className="md:w-[45%] mt-4 lg:text-sm 2xl:text-lg "><span className="pr-6"></span>Ard Al-Ganatain is a leading company in terms of size of imports and distribution network. It usually occupies a permanent position among the top 10 importers in Yemen. It maintains steady growth and developed into a leading private-sector pharmaceutical importing organization in the Republic of Yemen. It is ranked number one among the top ten Pharmaceutical importers in Yemen for nine years from 2008 until 2016 and ranked number two from 2017 to 2020. In 2022 we returned to occupy number one in the ranking despite the bad economical situation in Yemen due to the war and the sanctions.</p>
          <div className="md:w-[50%] md:relative mt-4 md:mt-0">
            <img className="md:absolute inset-0 w-full h-full object-fit" src="/AchievementPageImgs/OurAchievementImg1.webp" alt="Our Achievement Img" />
          </div>
        </div>


        <div className="flex w-full justify-between items-center flex-col-reverse md:flex-row  mt-4">
          <img className="md:w-[40%]  object-fit" src="/AchievementPageImgs/OurAchievementImg2.webp" alt="Our Achievement Img" />
          <p className="mt-6 lg:text-sm 2xl:text-lg md:w-[50%] md:px-4"><span className="pr-6"></span>Ard Al Gantain represents  an excellent market share (9.99 %) among all pharmaceutical importers in Yemen  which include up to 370 distributors</p>
        </div>




      </div>

    </div>
  );
}
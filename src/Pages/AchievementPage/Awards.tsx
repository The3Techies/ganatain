import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useState } from "react";



export default function Awards() {

  const [orderOfImgs, setOrderOfImgs] = useState([0, 1, 2]);
  const [awardsInfo, setAwardsInfo] = useState([
    {
      RealImg: "/AchievementPageImgs/Merit.webp",
      PlaceHolderImg: "/AchievementPageImgs/Merit.webp",
      name: "Certificate of Merit",
      active: false,
    },
    {
      RealImg: "/AchievementPageImgs/Yemen-Association-against-Epilepsy.webp",
      PlaceHolderImg: "/AchievementPageImgs/Yemen-Association-against-Epilepsy.webp",
      name: "Yemen Association against Epilepsy",
      active: false,
    },
    {
      RealImg: "/AchievementPageImgs/Merck.webp",
      PlaceHolderImg: "/AchievementPageImgs/Merck.webp",
      name: "Merck Certificate",
      active: false,
    },
    {
      RealImg: "/AchievementPageImgs/Julphar.webp",
      PlaceHolderImg: "/AchievementPageImgs/Julphar.webp",
      name: "Julphar",
      active: false,
    },
  ])


  const moveOrder = (der: string) => {
    const maxIndex = awardsInfo.length - 1

    if (der === "Right") {
      const newOrder = orderOfImgs.map(item => (item + 1) % (maxIndex + 1));
      setOrderOfImgs(newOrder);
    } else {
      const newOrder = orderOfImgs.map(item => (item - 1 + (maxIndex + 1)) % (maxIndex + 1));
      setOrderOfImgs(newOrder);
    }
  };

  const handleMouseEnter = (index: number) => {
    const updatedAwardsInfo = [...awardsInfo];
    updatedAwardsInfo[index] = { ...updatedAwardsInfo[index], active: true };
    setAwardsInfo(updatedAwardsInfo);
  };

  const handleMouseLeave = (index: number) => {
    const updatedAwardsInfo = [...awardsInfo];
    updatedAwardsInfo[index] = { ...updatedAwardsInfo[index], active: false };
    setAwardsInfo(updatedAwardsInfo);
  };

  const orderOfImgsHtml = orderOfImgs.map(imgOrder => {
    if (awardsInfo[imgOrder].active) {
      return (
        <img key={imgOrder} src={awardsInfo[imgOrder].RealImg} className=" w-[25%] aspect-square object-fill shadow-[1px_4px_4px_0px] shadow-[#000000] rounded-xl" alt={"img for" + awardsInfo[imgOrder].name} onMouseLeave={() => handleMouseLeave(imgOrder)} />
      )
    }
    return (
      <div key={imgOrder} className="w-[25%] aspect-square object-fill shadow-[1px_4px_4px_0px] shadow-[#000000] rounded-xl flex flex-col justify-center items-center bg-[#E6EDF0]" onMouseEnter={() => handleMouseEnter(imgOrder)} >
        <img className="w-[50%] h-[20%] object-cover" src={awardsInfo[imgOrder].PlaceHolderImg} alt="" />
        <h1 className="font-bold mt-4 text-center px-2">{awardsInfo[imgOrder].name}</h1>
      </div>
    )
  })


  return (


    <div className="bg-[#FFFFFF] flex justify-center py-6">

      <div className="w-[90%] select-none">
        <h1 className="text-[#3E5A69] lg:text-3xl 2xl:text-5xl font-bold">Awards</h1>

        <div className="flex w-full justify-between items-center mt-4 " >
          <FaArrowLeft className="text-5xl cursor-pointer" onClick={() => moveOrder("left")} />
          {orderOfImgsHtml}
          <FaArrowRight className="text-5xl cursor-pointer" onClick={() => moveOrder("Right")} />
        </div>

      </div>
    </div>
  );
}
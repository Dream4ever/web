import React, { useEffect, useReducer, useRef, useState } from "react";
import { CardType } from "..";
import { useNavigate } from "react-router-dom";
interface Props {
  data: CardType
}
const Card: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();


  return (
    <div className={`flex flex-col w-full md:w-[383px] h-[477px] p-4 border rounded-xl border-[#5D5D5D] group hover:bg-[#1B1B1B] hover:cursor-pointer gap-4`}
      onClick={() => { navigate('/blog/detail') }}>
      <img src={data.image} className="w-[351px]" alt="" />
      <div className="flex flex-col items-start justify-between p-2 ">
        <button className="h-7 px-[10px] py-1 bg-primary-default text-sm font-Outfit font-medium leading-[20px] mb-3 rounded-md">{data.label}</button>
        <p className={` text-start text-[22px] h-[93px] font-medium leading-[140%] group-hover:text-[#9264F8] font-Outfit mb-4`}>
          {data.content}
        </p>
        <p className="text-base font-normal leading-[150%] text-[#999]">{data.date}</p>
      </div>
    </div>
  );
};

export default Card;
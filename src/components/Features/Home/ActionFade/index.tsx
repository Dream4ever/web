import "./index.css";

import React, { useEffect, useState } from "react";

interface Props {
  imgUrl: string;
  replaceImgUrl: string;
}

const ActionFade: React.FC<Props> = ({ imgUrl, replaceImgUrl }) => {
  return (
    <div className="relative flex items-center justify-center w-[75%] h-[50px]">
      <img src={imgUrl} alt="" className={`a-fade absolute`} />
      <img src={replaceImgUrl} alt="" className={`b-fade absolute`} />
    </div>
  );
};

export default ActionFade;

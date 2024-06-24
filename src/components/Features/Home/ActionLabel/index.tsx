import { useEffect, useRef, useState } from "react";
import "./index.css";
import ActionFade from "../ActionFade";
import Dot from "./dot";
import SmallDot from "./smallDot";
interface Props {
  className: string;
  label1?: string;
  label2?: string;
  imgUrl1?: string;
  imgUrl2?: string;
  dotSName?: string;
  dotCName?: string;
  dot3Name?: string;
  dot4Name?: string;
  dot5Name?: string;
}

const ActionLabel: React.FC<Props> = ({
  className,
  label1,
  label2,
  imgUrl1,
  imgUrl2,
  dotSName,
  dotCName,
  dot3Name,
  dot4Name,
  dot5Name,
}) => {
  const actionRef = useRef<any>();

  const handleMouseMove = (event: any) => {
    const actionSubRefCurrent = actionRef.current;
    const mainLabel = actionRef.current;
    if (mainLabel) {
      const labelPosition = actionSubRefCurrent.getBoundingClientRect();
      const { clientX, clientY } = event;
      const centerX = labelPosition.left + labelPosition.width / 2;
      const centerY = labelPosition.top + labelPosition.height / 2;
      const xRotation = (clientY - centerY) / 3;
      const yRotation = (clientX - centerX) / 3;
      mainLabel.style.transition = "none";
      mainLabel.style.transform = `rotateY(${yRotation}deg) rotateX(${xRotation}deg)`;
    }
  };

  const handleMouseLeave = () => {
    const mainLabel = actionRef.current;

    if (mainLabel) {
      mainLabel.style.transition = "all 0.5s";
      mainLabel.style.transform = `rotateY(0deg) rotateX(0deg)`;
    }
  };

  return (
    <div
      className={`absolute ${className} w-[100px] h-[100px] md:w-[250px] md:h-[250px] flex justify-center items-center transition-all`}
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseLeave={(e) => handleMouseLeave()}
    >
      <div
        ref={actionRef}
        className={`relative flex flex-col justify-center items-center w-[60px] h-[60px] md:w-20 md:h-20 gap-1 md:p-2 bg-white/10 ${
          dotCName ? "border border-[#AAAAAA]" : ""
        } item rounded-2xl ${imgUrl1 !== "/images/home/icons/ts.png" ? 'bg-[#FFFFFF12]' : ''}`}
      >
        <ActionFade
          className={` ${
            dotCName ? "w-[20px] md:w-[37px]" : "w-[60px] md:w-[65px]"
          } `}
          comp1={
            <div className="flex flex-col items-center">
              {label1 && <p className="text-[14px] md:text-[17px]">{label1}</p>}
              <div className="flex justify-center">
                <img src={imgUrl1} />
              </div>
            </div>
          }
          comp2={
            <div className="flex flex-col items-center">
              {label2 && <p className="text-[14px] md:text-[17px]">{label2}</p>}
              <div className="flex justify-center">
                <img src={imgUrl2} />
              </div>
            </div>
          }
        />
        {dotCName && <Dot className={`absolute ${dotCName}`} />}
        {dotSName && <SmallDot className={`absolute ${dotSName}`} />}
        {dot3Name && <SmallDot className={`absolute ${dot3Name}`} />}
        {dot4Name && <Dot className={`absolute ${dot4Name}`} />}
        {dot5Name && <Dot className={`absolute ${dot5Name}`} />}
      </div>
    </div>
  );
};

export default ActionLabel;

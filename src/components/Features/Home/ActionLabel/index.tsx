import { useEffect, useRef, useState } from "react";
import "./index.css";
import ActionFade from "../ActionFade";
import Dot from "./dot";
import { useRotation } from "../../../../RotationContext";
interface Props {
  bHaveBackground?: false;
  className: string;
  innerClassName?: string;
  label1?: string;
  label2?: string;
  imgUrl1?: string;
  imgUrl2?: string;
  imgClassName?: string;
  dotSName?: string;
  dotCName?: string;
  dot3Name?: string;
  dot4Name?: string;
  dot5Name?: string;
  nDotBackground?: number;
}

const ActionLabel: React.FC<Props> = ({
  bHaveBackground = true,
  className,
  innerClassName,
  label1,
  label2,
  imgUrl1,
  imgUrl2,
  imgClassName,
  dotSName,
  dotCName,
  dot3Name,
  dot4Name,
  dot5Name,
  nDotBackground,
}) => {
  const actionRef = useRef<any>();
  const { rotation, setRotation } = useRotation();

  useEffect(() => {
    if (actionRef.current) {
      actionRef.current.style.transition = rotation.transition;
      actionRef.current.style.transform = `rotateY(${rotation.y}deg) rotateX(${rotation.x}deg)`;
    }
  }, [rotation]);

  return (
    <div
      className={`absolute w-[100px] h-[100px] md:w-[250px] md:h-[250px] flex justify-center items-center transition-all ${className}`}
    >
      <div
        ref={actionRef}
        className={`relative flex flex-col justify-center items-center w-[60px] h-[60px] md:w-20 md:h-20 gap-1 md:p-2 bg-white/10 ${dotCName ? "border border-[#AAAAAA]" : ""
          } item rounded-2xl ${bHaveBackground ? "bg-[#FFFFFF12]" : ""
          } ${innerClassName}`}
      >
        {label2 || imgUrl2 ? (
          <ActionFade
            className={` ${dotCName ? "w-[20px] md:w-[37px]" : "w-[60px] md:w-[65px]"
              } ${imgClassName}`}
            comp1={
              <div className="flex flex-col items-center">
                <div className="flex justify-center">
                  <img src={imgUrl1} className={`w-full ${imgClassName}`} />
                </div>
                {label1 && (
                  <p className="text-[14px] md:text-[17px]">{label1}</p>
                )}
              </div>
            }
            comp2={
              <div className="flex flex-col items-center">
                <div className="flex justify-center">
                  <img src={imgUrl2} className={`w-full ${imgClassName}`} />
                </div>
                {label2 && (
                  <p className="text-[14px] md:text-[17px]">{label2}</p>
                )}
              </div>
            }
          />
        ) : (
          <img src={imgUrl1} className={`${imgClassName}`} />
        )}
        {dotSName && (
          <Dot
            className={`absolute ${dotSName}`}
            innerClassName="!w-2 !h-2"
            nBackground={nDotBackground}
          />
        )}
        {dotCName && (
          <Dot
            className={`absolute ${dotCName}`}
            nBackground={nDotBackground}
          />
        )}
        {dot3Name && (
          <Dot
            className={`absolute ${dot3Name}`}
            innerClassName="!w-2 !h-2"
            nBackground={nDotBackground}
          />
        )}
        {dot4Name && (
          <Dot
            className={`absolute ${dot4Name}`}
            nBackground={nDotBackground}
          />
        )}
        {dot5Name && (
          <Dot
            className={`absolute ${dot5Name}`}
            innerClassName="!w-[18px] !h-[18px]"
            nBackground={nDotBackground}
          />
        )}
      </div>
    </div>
  );
};

export default ActionLabel;

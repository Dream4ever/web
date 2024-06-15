import { useEffect, useRef, } from 'react';
import './index.css';
interface Props {
  className: string;
  label?: string;
  imgUrl?: string;
  dotSName: string;
  dotCName: string;
}

const ActionLabel: React.FC<Props> = ({ className, label, imgUrl, dotSName, dotCName }) => {

  const actionRef = useRef<any>();
  const actionSubRef = useRef<any>();

  const handleMouseMove = (event: any) => {
    const actionSubRefCurrent = actionSubRef.current;
    const mainLabel = actionSubRef.current;
    if (mainLabel) {
      const labelPosition = actionSubRefCurrent.getBoundingClientRect();
      const { clientX, clientY } = event;
      const centerX = labelPosition.left + labelPosition.width / 2;
      const centerY = labelPosition.top + labelPosition.height / 2;
      const xRotation = (clientY - centerY) / 3;
      const yRotation = (clientX - centerX) / 3;
      mainLabel.style.transition = "none"
      mainLabel.style.transform = `rotateY(${yRotation}deg) rotateX(${xRotation}deg)`;
    }
  };

  const handleMouseLeave = () => {
    const mainLabel = actionSubRef.current;

    if (mainLabel) {
      console.log("leaving", mainLabel)
      mainLabel.style.transition = "all 0.5s"
      mainLabel.style.transform = `rotateY(0deg) rotateX(0deg)`;

    }
  }

  return (
    <div ref={actionRef} className={`absolute mainLabel ${className} w-[250px] h-[250px] flex justify-center items-center transition-all`} onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={(e) => handleMouseLeave()}>
      <div ref={actionSubRef} className={` relative flex flex-col justify-center items-center w-20 h-20 gap-1 p-2 bg-white/10 border border-[#AAAAAA] item rounded-2xl`}>
        {imgUrl && <img
          src={imgUrl}
          alt="background"
          className="w-[37px]"
        />}
        {label && <p>{label}</p>}
        <div className={`relative `} style={{ transform: "translateZ(10px)" }}>
          <div className={`absolute ${dotCName} rounded-full w-4 h-4 bg-[#FFF]`} />
          <div className={`absolute ${dotSName} rounded-full w-2 h-2 bg-[#FFF]`} style={{ transform: "translateZ(250px)" }} />
        </div>
      </div>
    </div>
  );
};

export default ActionLabel;
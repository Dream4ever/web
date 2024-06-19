import { useEffect, useRef, useState, } from 'react';
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

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prevStatus => !prevStatus);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
    <div ref={actionRef} className={`absolute mainLabel ${className} w-[100px] h-[100px] md:w-[250px] md:h-[250px] flex justify-center items-center transition-all`} onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={(e) => handleMouseLeave()}>
      <div ref={actionSubRef} className={` relative flex flex-col justify-center items-center w-[60px] h-[60px] md:w-20 md:h-20 gap-1 md:p-2 bg-white/10 border border-[#AAAAAA] item rounded-2xl`}>
        {imgUrl && <img
          src={imgUrl}
          alt="background"
          className="md:w-[37px] w-[20px]"
        />}
        {label && <p className='text-[14px] md:text-[17px]'>{label}</p>}
        <div className={`relative `} style={{ transform: "translateZ(10px)" }}>
          <div className={`absolute ${dotCName} rounded-full w-4 h-4`} style={{ backgroundImage: isVisible ? 'linear-gradient(70deg, #9945FF -7.78%, #14F195 106.39%)' : 'linear-gradient(70deg, #ffffff -7.78%, #ffffff 106.39%)' }} />
          <div className={`absolute ${dotSName} rounded-full w-2 h-2`} style={{ transform: "translateZ(250px)", backgroundImage: isVisible ? 'linear-gradient(70deg, #9945FF -7.78%, #14F195 106.39%)' : 'linear-gradient(70deg, #ffffff -7.78%, #ffffff 106.39%)' }} />
        </div>
      </div>
    </div>
  );
};

export default ActionLabel;
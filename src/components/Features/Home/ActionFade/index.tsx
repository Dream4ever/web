import React, { useEffect, useState } from 'react';
import './index.css';

interface Props {
  imgUrl: string;
  replaceImgUrl: string;
}

const ActionFade: React.FC<Props> = ({ imgUrl, replaceImgUrl }) => {
  const [fadeProp, setFadeProp] = useState({
    fade: 'fade-in',
  });
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prevStatus => !prevStatus);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === 'fade-in') {
        setFadeProp({
          fade: 'fade-out'
        })
      } else {
        setFadeProp({
          fade: 'fade-in'
        })
      }
    }, 2000);

    return () => clearInterval(timeout)
  }, [fadeProp])

  return (
    <div className="relative flex items-center justify-center">

      {isVisible ? (<img src={imgUrl}
        alt=""
        className={`${fadeProp.fade} w-[75%] md:w-full lg:w-full`}
      />) :
        (
          <img src={replaceImgUrl}
            alt=""
            className={`${fadeProp.fade} w-[75%] md:w-full lg:w-full`}
          />
        )}
    </div>
  );
};

export default ActionFade;
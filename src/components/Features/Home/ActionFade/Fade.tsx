import React, { useEffect, useState } from "react";
import './index.css';

type Props = {
  children: any;
}

const Fade: React.FC<Props> = ({ children }) => {
  const [fadeClass, setFadeClass] = useState('fade-enter');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('fade-exit');
      setTimeout(() => {
        setFadeClass('fade-enter');
      }, 2000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fade ${fadeClass}`}>
      {children}
    </div>
  );
};

export default Fade;
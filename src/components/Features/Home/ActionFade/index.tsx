import React, { ReactNode, useEffect, useState } from "react";

interface Props {
  className?: string;
  comp1: ReactNode;
  comp2: ReactNode;
}

const ActionFade: React.FC<Props> = ({ comp1, comp2, className }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className={`a-fade absolute`}>
        {comp1}
      </div>
      <div className={`b-fade absolute`}>
        {comp2}
      </div>
    </div>
  );
};

export default ActionFade;

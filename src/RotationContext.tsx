import React, { createContext, useContext, useState } from 'react';

interface RotationContextProps {
  rotation: { x: number, y: number, transition: string };
  setRotation: React.Dispatch<React.SetStateAction<{ x: number, y: number, transition: string }>>;
}

const RotationContext = createContext<RotationContextProps | undefined>(undefined);

interface Props {
  children: any
};

export const RotationProvider: React.FC<Props> = ({ children }) => {
  const [rotation, setRotation] = useState<{ x: number, y: number, transition: string }>({ x: 0, y: 0, transition: "none" });

  return (
    <RotationContext.Provider value={{ rotation, setRotation }}>
      {children}
    </RotationContext.Provider>
  );
};

export const useRotation = (): RotationContextProps => {
  const context = useContext(RotationContext);
  if (!context) {
    throw new Error('useRotation must be used within a RotationProvider');
  }
  return context;
};

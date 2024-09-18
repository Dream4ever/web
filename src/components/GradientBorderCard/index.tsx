import React, { ReactNode } from 'react'
import './index.css'

type GradientBorderCardProps = {
  text?: string;
  primary?: boolean;
  last?: boolean;
  children?: ReactNode;
}

const GradientBorderCard: React.FC<GradientBorderCardProps> = ({
  text,
  primary = false,
  last = false,
  children,
}) => {
  return (
    // card wrapper
    <div
      className={`relative flex items-center justify-center overflow-hidden gradient-border-card
        bg-gradient-to-l
        ${primary ? 'from-[#A663EEE5] to-[#643695E5]' : 'from-[#3F3949E5] to-[#2E2E31E5]'}
        `}
    >
      {/* card content */}
      <span className='text-2xl font-semibold text-white uppercase font-Outfit'>
        {text || ''}
      </span>
      {children}
  </div>
  )
}

export default GradientBorderCard

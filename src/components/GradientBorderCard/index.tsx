import React, { ReactNode } from 'react'
import './index.css'

type GradientBorderCardProps = {
  text?: string;
  primary?: boolean;
  last?: boolean;
  children?: ReactNode;
}

const GradientBorderCard: React.FC<GradientBorderCardProps> = ({
  text = '',
  primary = false,
  last = false,
  children,
}) => {
  const wrapperBg = primary ? 'from-bg-card-primary-from/80 to-bg-card-primary-to/80'
    : last ? 'from-bg-card-from to-bg-card-to'
      : 'from-bg-card-from/50 to-bg-card-to/50'

  return (
    // card wrapper
    <div className={`relative flex items-center justify-center overflow-hidden gradient-border-card
        bg-gradient-to-l ${wrapperBg}`}>
      {/* card content */}
      <span className='text-2xl font-semibold text-white uppercase font-Outfit'>
        {text}
      </span>
      {children}
    </div>
  )
}

export default GradientBorderCard

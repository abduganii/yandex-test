import React from 'react'

export default function Container({children, className}) {
  return (
    <div className={`w-full max-w-[1288px] mx-[auto] px-[20px]  ${className && className}`}>
      {children}
    </div>
  )
}

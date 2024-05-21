import React from 'react'

export default function ContainerMin({children, className}) {
  return (
    <div className={`w-full max-w-[928px] mx-[auto] px-[20px]  ${className && className}`}>
      {children}
    </div>
  )
}

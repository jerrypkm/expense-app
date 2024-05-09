import React from 'react'

interface Props {
  children: React.ReactNode;
}

export const Card = ({children}: Props) => {
  return (
    <div className='p-5 bg-white rounded-md flex flex-col justify-center items-center shadow-md'>
      {children}
    </div>
  )
}

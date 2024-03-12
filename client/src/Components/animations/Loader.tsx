import React from 'react'

interface LoaderProps{
    width: number,
    height: number
}

const Loader = ({width,height}:LoaderProps) => {
  return (
    <div className={`w-[${width}rem] h-[${height}rem] border-[1.4rem] border-purple-400 border-l-transparent animate-spin rounded-full`}>
      
    </div>
  )
}

export default Loader

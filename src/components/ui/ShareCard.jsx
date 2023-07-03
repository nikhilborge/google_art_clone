import React from 'react'

const ShareCard = ({title, sub, img, link}) => {
  return (
    <div className="w-full sm:w-auto mb-8 sm:mb-0">
    <div className="transition-transform duration-300 rounded-lg bg-slate-500">
      <div className="group relative w-64 sm:w-full h-40 rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-300 transform-gpu scale-100 group-hover:scale-105"
          src={img}
          alt="Card"
        />
      </div>
    </div>
    <div className="flex flex-col justify-center mt-2">
      <div className="flex items-center justify-between ">
        <p className="text-xs text-[#1A73E8] font-normal">{link}</p>
        <span>share</span>
      </div>
      <p className="font-medium text-base">{title}</p>
      <span className="text-xs">{sub}</span>
    </div>
  </div>
  )
}

export default ShareCard
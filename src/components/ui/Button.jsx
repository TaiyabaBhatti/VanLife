import React from 'react'

export default function Button({text,bgColor="bg-shook-orange",textColor="text-white"}) {
  return (
   <button className={`rounded-md ${bgColor} cursor-pointer font-bold text-base text-center py-1 px-5 ${textColor} `}>{text}</button>
  )
}

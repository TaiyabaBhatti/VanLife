import React from 'react'

export default function Button({text,bgColor="bg-shook-orange"}) {
  return (
   <button className={`rounded-md ${bgColor} font-bold text-base text-center py-2 px-5 text-white `}>{text}</button>
  )
}

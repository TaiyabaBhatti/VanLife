import React from 'react'

export default function Wrapper({children,className}) {
  return (
   <section className={`px-6 ${className}`}>
{children}
   </section>
  )
}

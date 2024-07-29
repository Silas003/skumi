import React from 'react'

const Footer = () => {
    const year=new Date()
  return (
    <div className="mt-11 border-t-2 border-neutral-600 flex-1 items-center justify-center">
        <div className="  text-neutral-500 p-10 ">
        &copy;    <span className="text-green-600 font-bold p-0.5 bg-green-600/10 rounded-md border border-green-500/15 inline-block mt-2">{year.getFullYear()}</span> Kumi.Silas
          <div>
          All Rights Reserved.
          v 1.0.1
          </div>
        </div>
    </div>
  )
}

export default Footer
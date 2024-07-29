import React from 'react'
import Image from 'next/image'
const Footer = () => {
    const year=new Date()
  return (
    <div className=" mt-10 border-t-2 border-neutral-600 flex-1 items-center flex justify-between mb-3">
        <div className="  text-neutral-500 mt-5 ">
        {/* &copy;    */}
         <span className="text-green-600 font-bold p-0.5 bg-green-600/10 rounded-md border border-green-500/15 inline-block mt-2">{year.getFullYear()}  Kumi•Silas</span>
          <div>
         
          </div>
        </div>
        <span className="text-white/85 text-sm mt-5"> All Rights Reserved. v1.0.1
       </span>
        <div className=" flex items-center justify-center mt-5">
            <Image src="/2.svg" alt="Logo" width={20} height={20} />
            <h3 className="font-semibold text-white/80 ml-1 text-lg">Nck•03</h3>
          </div>
    </div>
  )
}

export default Footer
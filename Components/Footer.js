import React from 'react'
import Image from 'next/image'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="mt-10 border-t-2 border-neutral-600 py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <div className="text-center sm:text-left">
                        <span className="text-green-600 font-bold p-1 bg-green-600/10 rounded-md border border-green-500/15 inline-block">
                            {year} Kumi•Silas
                        </span>
                    </div>

                    <span className="text-white/85 text-sm text-center sm:text-right">
                        All Rights Reserved. v1.0.1
                    </span>

                    <div className="flex items-center justify-center">
                        <Image src="/2.svg" alt="Logo" width={20} height={20} />
                        <h3 className="font-semibold text-white/80 ml-1 text-lg">Nck•03</h3>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
import React from 'react'
import Image from 'next/image'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="mt-16 bg-gradient-to-t from-neutral-900 via-neutral-950 to-transparent dark:from-black dark:via-neutral-900 border-t border-neutral-700/40 shadow-inner py-8">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-4 gap-y-2 text-center">
                <div className="flex items-center gap-2">
                    <Image src="/2.svg" alt="Logo" width={28} height={28} className="drop-shadow" />
                    <h3 className="font-extrabold text-white text-2xl tracking-tight break-words">Nck•03</h3>
                </div>
                <span className="text-green-400 font-semibold bg-green-600/10 rounded-md border border-green-500/15 px-3 py-1 text-sm break-words">
                    {year} Kumi•Silas
                </span>
                <span className="text-neutral-300 text-sm text-center break-words">
                    All Rights Reserved. v1.0.1
                </span>
            </div>
        </footer>
    )
}

export default Footer
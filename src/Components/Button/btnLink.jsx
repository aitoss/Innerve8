import React from 'react'
import './btn.css'
import BtnPrespective from './btnprespective'

const btnLink = ({ name, icon, mode, href }) => {


    if (mode === "dark") {
        return (
            <>
                <div className="buttn btn flex items-center justify-center gap-2 border border-[#f6f6f6] rounded-full p-4 cursor-pointer">
                    <a className="text-[#f6f6f6] text-lg font-[300]" href={href}> <BtnPrespective label={name} /> </a>
                    <div className="rot w-[30px] h-[30px] flex items-center justify-center text-[#f6f6f6] border border-[#f6f6f6]"><p>{icon}</p></div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="buttn btn flex items-center justify-center gap-2 border border-[#212121] rounded-full p-4 cursor-pointer">
                <a className="text-[#212121] text-lg font-[400] " href={href}> <BtnPrespective label={name} /> </a>
                <div className="rot w-[30px] h-[30px] flex items-center justify-center text-[#212121] border border-[#212121] rounded-full"><p>{icon}</p></div>
            </div>
        </>
    )
}

export default btnLink

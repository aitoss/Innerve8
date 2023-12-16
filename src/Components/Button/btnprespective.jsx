import React from 'react'
import './btn.css'

const btnprespective = ({ label }) => {
    return (
        <div className="press w-full h-full flex flex-col justify-center items-center">
            <p className="press__inner1">{label}</p>
            <p className="press__inner2">{label}</p>
        </div>
    )
}

export default btnprespective

import React from 'react'
import '../stylings/compoStyle/Instructions.css'
import { instr } from '../scripts/instructions'
function Instructions() {
    const displayInstruction = instr.map((i) => {
        return (
            <div className="row align-center instru-div" key={i.id}>
                <span>{i.id}</span>
                <p>{i.txt}</p>
            </div>
        )
    })
    return (
        <div className='col instruction-div'>
            <h1 className='txt-align-center'>General Instruction</h1>
            <div className="row justify-sb  instruction-content">
                <div className="i-div-1"></div>
                <div className="i-div-2">{displayInstruction}</div>
            </div>
        </div>
    )
}

export default Instructions
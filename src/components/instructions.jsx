import React from 'react';
import { instruction } from '../scripts/data';

function Instructions() {
    return (
        <div className='w-full py-5'>
            <h1 className='text-center text-3xl font-medium tracking-wider mb-4'>General Instruction</h1>
            <div className="flex flex-col sm:flex-row justify-between w-4/5 mx-auto sm:py-5 px-5 sm:px-0 sm:rounded-xl">
                <div className="hidden sm:block w-2/5 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(../../../assets/instructionImg.png)', backgroundPositionY: '-80px' }}></div>
                <div className="w-full sm:w-3/5">
                    {
                        instruction.map((i) => {
                            return (
                                <div className="flex items-center mb-2 p-2" key={i.id}>
                                    <span className="bg-[#31065c] text-white py-2 px-4 rounded-full text-lg">{i.id}</span>
                                    <p className="text-lg ml-2">{i.txt}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Instructions;

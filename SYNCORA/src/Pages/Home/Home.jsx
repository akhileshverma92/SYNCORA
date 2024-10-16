import React, { useState } from 'react'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
    const [value, setValue] = useState()
    const navigate = useNavigate()

    const handlejoin = useCallback(() => {
        navigate(`/room/${value}`);
    }, [navigate, value])

    return (
        <>
            <div className="main min-h-screen flex ">
                <div className="home mx-auto my-auto ">
                    <input
                        className='w-[200px] h-[50px] border-2 border-black rounded-xl pl-3 mr-2'
                        value={value} onChange={(e) => setValue(e.target.value)}
                        type="text" name="" id="" placeholder='Enter room code ' />
                    <button className='text-2xl bg-blue-500 rounded-xl w-[120px] h-[50px] font-mono font-extrabold border-red-300 border-spacing-6'
                        onClick={handlejoin}
                    >Join</button>
                </div>
            </div>

        </>
    )
}

export default Home
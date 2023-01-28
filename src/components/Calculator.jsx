import React, { useState } from 'react';
import { IoMdColorPalette } from 'react-icons/io'

const Calculator = () => {



    // declaring state 
    const [number, setNumber] = useState('')

    // handle click
    const handleClick = (e) => {
        setNumber(number.concat(e.target.value))
    }

    // handle clear 
    const handleClear = () => {
        setNumber('')
    }

    // handle slice
    const handleSlice = () => {
        setNumber(number.slice(0, -1))

    }

    // handle answer 
    const handleAnswer = () => {
        try {
            setNumber(eval(number).toString())
        } catch (error) {
            setNumber('Invalid')
        }
    }


    const theme = () => {

    }

    return (
        <>
            <section className=" flex justify-center text-white">
                <div className="bg-cyan-900 md:w-4/6 lg:w-1/3 w-full m-2 container   rounded-lg overflow-hidden flex flex-col shadow-2xl-black px-5 pb-5 md:my-10">
                    <div className='text-cyan-200 w-full font-bold text-3xl h-16 flex bg-cyan-900 items-center flex-row justify-center space-x-2 pl-2'>

                        <p className='bg-cyan-900'>Apna Calculator</p>
                    </div>

                    {/* screen */}
                    <div className=' h-20  bg-cyan-900'>

                        <input
                            type='text'
                            placeholder='0'
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            className=' w-full h-full border rounded-2xl border-white text-black bg-gray-300 text-4xl text-right pr-5 '
                        />
                    </div>

                    {/* keypad */}
                    <div className='grid grid-cols-5  bg-cyan-900 gap-2 mt-8 mx-1'>

                        <button value='(' onClick={handleClick} class=" md:w-20 h-20  sm:w-16 sm:h-16  font-bold text-3xl   items-center shadow-2xl  flex text-cyan-100 justify-center transition duration-200 ease-in-out transform px-4 py-2  border-b-4 border-cyan-500 hover:border-b-2 bg-gradient-to-t from-cyan-400  via-cyan-600 to-cyan-200 rounded-2xl hover:translate-y-px ">
                            (
                        </button>
                        <button value=')' onClick={handleClick} class=" md:w-20 h-20  sm:w-16 sm:h-16  font-bold text-3xl  items-center shadow-2xl  flex text-cyan-100 justify-center transition duration-200 ease-in-out transform px-4 py-2  border-b-4 border-cyan-500 hover:border-b-2 bg-gradient-to-t from-cyan-400  via-cyan-600 to-cyan-200 rounded-2xl hover:translate-y-px ">
                            )
                        </button>
                        <button onClick={handleAnswer} class=" md:w-20 h-20  sm:w-16 sm:h-16  font-bold md:text-3xl text-xl  items-center shadow-2xl  flex text-cyan-100 justify-center transition duration-200 ease-in-out transform px-4 py-2  border-b-4 border-cyan-500 hover:border-b-2 bg-gradient-to-t from-cyan-400  via-cyan-600 to-cyan-200 rounded-2xl hover:translate-y-px ">
                            Ans.
                        </button>
                        <button onClick={handleSlice} class=" md:w-20 h-20  sm:w-16 sm:h-16  font-bold text-3xl  items-center shadow-2xl  flex text-cyan-100 justify-center transition duration-200 ease-in-out transform px-4 py-2  border-b-4 border-cyan-500 hover:border-b-2 bg-gradient-to-t from-cyan-400  via-cyan-600 to-cyan-200 rounded-2xl hover:translate-y-px ">
                            C
                        </button>
                        <button onClick={handleClear} class=" md:w-20 h-20  sm:w-16 sm:h-16  font-bold text-3xl  items-center shadow-2xl  flex text-cyan-100 justify-center transition duration-200 ease-in-out transform px-4 py-2  border-b-4 border-cyan-500 hover:border-b-2 bg-gradient-to-t from-cyan-400  via-cyan-600 to-cyan-200 rounded-2xl hover:translate-y-px ">
                            AC
                        </button>



                        <button value='7' onClick={handleClick} class=" md:w-20 h-20  sm:w-16 sm:h-16  font-bold text-3xl  items-center shadow-2xl  flex text-cyan-100 justify-center transition duration-200 ease-in-out transform px-4 py-2  border-b-4 border-cyan-500 hover:border-b-2 bg-gradient-to-t from-cyan-400  via-cyan-600 to-cyan-200 rounded-2xl hover:translate-y-px "
                        >7</button>
                        <button value='8' onClick={handleClick} class=" md:w-20 h-20  sm:w-16 sm:h-16  font-bold text-3xl  items-center shadow-2xl  flex text-cyan-100 justify-center transition duration-200 ease-in-out transform px-4 py-2  border-b-4 border-cyan-500 hover:border-b-2 bg-gradient-to-t from-cyan-400  via-cyan-600 to-cyan-200 rounded-2xl hover:translate-y-px "
                        >8</button>
                        <button value='9' onClick={handleClick} class=" md:w-20 h-20  sm:w-16 sm:h-16  font-bold text-3xl  items-center shadow-2xl  flex text-cyan-100 justify-center transition duration-200 ease-in-out transform px-4 py-2  border-b-4 border-cyan-500 hover:border-b-2 bg-gradient-to-t from-cyan-400  via-cyan-600 to-cyan-200 rounded-2xl hover:translate-y-px "
                        >9</button>
                        <button value='%' onClick={handleClick} class=" md:w-20 h-20  sm:w-16 sm:h-16  font-bold text-3xl  items-center shadow-2xl  flex text-cyan-100 justify-center transition duration-200 ease-in-out transform px-4 py-2  border-b-4 border-cyan-500 hover:border-b-2 bg-gradient-to-t from-cyan-400  via-cyan-600 to-cyan-200 rounded-2xl hover:translate-y-px "
                        >%</button>
                        <button value='/' onClick={handleClick} class=" md:w-20 h-20  sm:w-16 sm:h-16  font-bold text-3xl  items-center shadow-2xl  flex text-cyan-100 justify-center transition duration-200 ease-in-out transform px-4 py-2  border-b-4 border-cyan-500 hover:border-b-2 bg-gradient-to-t from-cyan-400  via-cyan-600 to-cyan-200 rounded-2xl hover:translate-y-px "
                        >/</button>


                        <button value='4' onClick={handleClick} class=" md:w-20 h-20  sm:w-16 sm:h-16  font-bold text-3xl  items-center shadow-2xl  flex text-cyan-100 justify-center transition duration-200 ease-in-out transform px-4 py-2  border-b-4 border-cyan-500 hover:border-b-2 bg-gradient-to-t from-cyan-400  via-cyan-600 to-cyan-200 rounded-2xl hover:translate-y-px "
                        >4</button>
                        <button value='5' onClick={handleClick} class=" md:w-20 h-20  sm:w-16 sm:h-16  font-bold text-3xl  items-center shadow-2xl  flex text-cyan-100 justify-center transition duration-200 ease-in-out transform px-4 py-2  border-b-4 border-cyan-500 hover:border-b-2 bg-gradient-to-t from-cyan-400  via-cyan-600 to-cyan-200 rounded-2xl hover:translate-y-px "
                        >5</button>
                        <button value='6' onClick={handleClick} class=" md:w-20 h-20  sm:w-16 sm:h-16  font-bold text-3xl  items-center shadow-2xl  flex text-cyan-100 justify-center transition duration-200 ease-in-out transform px-4 py-2  border-b-4 border-cyan-500 hover:border-b-2 bg-gradient-to-t from-cyan-400  via-cyan-600 to-cyan-200 rounded-2xl hover:translate-y-px "
                        >6</button>
                        <button value='*' onClick={handleClick} class=" md:w-20 h-20  sm:w-16 sm:h-16  font-bold text-3xl  items-center shadow-2xl  flex text-cyan-100 justify-center transition duration-200 ease-in-out transform px-4 py-2  border-b-4 border-cyan-500 hover:border-b-2 bg-gradient-to-t from-cyan-400  via-cyan-600 to-cyan-200 rounded-2xl hover:translate-y-px "
                        >*</button>
                        <button value='+' onClick={handleClick} class=" md:w-20 h-40  sm:w-16   flex justify-center items-center shadow-2xl row-span-2  font-bold text-3xl   text-cyan-100  transition duration-200 ease-in-out transform px-4 py-2  border-b-4 border-cyan-500 hover:border-b-2 bg-gradient-to-t from-cyan-400  via-cyan-600 to-cyan-200 rounded-2xl hover:translate-y-px "
                        >+</button>

                        <button value='1' onClick={handleClick} class=" md:w-20 h-20  sm:w-16 sm:h-16  font-bold text-3xl  items-center shadow-2xl  flex text-cyan-100 justify-center transition duration-200 ease-in-out transform px-4 py-2  border-b-4 border-cyan-500 hover:border-b-2 bg-gradient-to-t from-cyan-400  via-cyan-600 to-cyan-200 rounded-2xl hover:translate-y-px "
                        >1</button>
                        <button value='2' onClick={handleClick} class=" md:w-20 h-20  sm:w-16 sm:h-16  font-bold text-3xl  items-center shadow-2xl  flex text-cyan-100 justify-center transition duration-200 ease-in-out transform px-4 py-2  border-b-4 border-cyan-500 hover:border-b-2 bg-gradient-to-t from-cyan-400  via-cyan-600 to-cyan-200 rounded-2xl hover:translate-y-px "
                        >2</button>
                        <button value='3' onClick={handleClick} class=" md:w-20 h-20  sm:w-16 sm:h-16  font-bold text-3xl  items-center shadow-2xl  flex text-cyan-100 justify-center transition duration-200 ease-in-out transform px-4 py-2  border-b-4 border-cyan-500 hover:border-b-2 bg-gradient-to-t from-cyan-400  via-cyan-600 to-cyan-200 rounded-2xl hover:translate-y-px "
                        >3</button>
                        <button value='-' onClick={handleClick} class=" md:w-20 h-20  sm:w-16 sm:h-16  font-bold text-3xl  items-center shadow-2xl  flex text-cyan-100 justify-center transition duration-200 ease-in-out transform px-4 py-2  border-b-4 border-cyan-500 hover:border-b-2 bg-gradient-to-t from-cyan-400  via-cyan-600 to-cyan-200 rounded-2xl hover:translate-y-px "
                        >-</button>

                        <button onClick={theme} class=" md:w-20 h-20  sm:w-16 sm:h-16  font-bold text-3xl  items-center shadow-2xl  flex text-cyan-100 justify-center transition duration-200 ease-in-out transform px-4 py-2  border-b-4 border-cyan-500 hover:border-b-2 bg-gradient-to-t from-cyan-400  via-cyan-600 to-cyan-200 rounded-2xl hover:translate-y-px " >
                            <IoMdColorPalette className="bg-transparent" />
                        </button>
                        <button value='0' onClick={handleClick} class=" text-cyan  bg-white  md:w-42 h-20   sm:h-16  rounded-2xl font-bold text-3xl flex justify-center items-center shadow-2xl col-span-2  text-cyan-100  transition duration-200 ease-in-out transform px-3 py-2  border-b-4 border-cyan-500 hover:border-b-2 bg-gradient-to-t from-cyan-400  via-cyan-600 to-cyan-200  hover:translate-y-px ">
                            0
                        </button>
                        <button onClick={handleAnswer} class=" md:w-20 h-20  sm:w-16 sm:h-16  font-bold text-3xl  items-center shadow-2xl  flex text-cyan-100 justify-center transition duration-200 ease-in-out transform px-4 py-2  border-b-4 border-cyan-500 hover:border-b-2 bg-gradient-to-t from-cyan-400  via-cyan-600 to-cyan-200 rounded-2xl hover:translate-y-px ">
                            =
                        </button>

                        <button value='.' onClick={handleClick} class=" md:w-20 h-20  sm:w-16 sm:h-16  font-bold text-3xl  items-center shadow-2xl  flex text-cyan-100 justify-center transition duration-200 ease-in-out transform px-4 py-2  border-b-4 border-cyan-500 hover:border-b-2 bg-gradient-to-t from-cyan-400  via-cyan-600 to-cyan-200 rounded-2xl hover:translate-y-px "
                        >.</button>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Calculator;

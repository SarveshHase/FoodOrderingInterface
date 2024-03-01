import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function RecommendedFood() {
    return (
        <div className="py-3 px-10 sm:px-4 md:px-6">
            <div className="container mx-auto py-[2vh]">
                <div className="text-2xl md:text-3xl font-bold text-center text-[#2e2e2e] lg:text-4xl">
                    Recommended <span className="text-[#f54748]">Foods</span>
                </div>
                <div className="grid gap-8 py-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    <div className="food-card bg-red-500/10 rounded-xl flex flex-col cursor-pointer items-center p-5">
                        <div className="relative mb-3 ">
                            <img src="src\assets\i1.png" alt="" />
                            <div className="absolute top-2 left-2">
                                <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
                                    <FaHeart className='absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                                </button>
                            </div>

                            <div className="absolute bottom-2 right-2">
                                <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
                                    <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">$10</div>
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-4 items-center">
                            <p className="text-xl tet-bold text-[#f54748] ">
                                Kebab
                            </p>
                            <div className="flex flex-sm space-x-2 cursor-pointer">
                                <span className="font-normal text-[#fdc55e]">4.3</span>
                                <FaStar className='text-[#fdc55e]' size={16} />
                                <span className="font-medium">(4)</span>
                            </div>
                        </div>

                        <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Order Now</button>
                    </div>
                    <div className="food-card bg-red-500/10 rounded-xl flex flex-col cursor-pointer items-center p-5">
                        <div className="relative mb-3 ">
                            <img src="src\assets\i1.png" alt="" />
                            <div className="absolute top-2 left-2">
                                <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
                                    <FaHeart className='absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                                </button>
                            </div>

                            <div className="absolute bottom-2 right-2">
                                <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
                                    <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">$10</div>
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-4 items-center">
                            <p className="text-xl tet-bold text-[#f54748] ">
                                Kebab
                            </p>
                            <div className="flex flex-sm space-x-2 cursor-pointer">
                                <span className="font-normal text-[#fdc55e]">4.3</span>
                                <FaStar className='text-[#fdc55e]' size={16} />
                                <span className="font-medium">(4)</span>
                            </div>
                        </div>

                        <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Order Now</button>
                    </div>
                    <div className="food-card bg-red-500/10 rounded-xl flex flex-col cursor-pointer items-center p-5">
                        <div className="relative mb-3 ">
                            <img src="src\assets\i1.png" alt="" />
                            <div className="absolute top-2 left-2">
                                <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
                                    <FaHeart className='absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                                </button>
                            </div>

                            <div className="absolute bottom-2 right-2">
                                <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
                                    <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">$10</div>
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-4 items-center">
                            <p className="text-xl tet-bold text-[#f54748] ">
                                Kebab
                            </p>
                            <div className="flex flex-sm space-x-2 cursor-pointer">
                                <span className="font-normal text-[#fdc55e]">4.3</span>
                                <FaStar className='text-[#fdc55e]' size={16} />
                                <span className="font-medium">(4)</span>
                            </div>
                        </div>

                        <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Order Now</button>
                    </div>
                    <div className="food-card bg-red-500/10 rounded-xl flex flex-col cursor-pointer items-center p-5">
                        <div className="relative mb-3 ">
                            <img src="src\assets\i1.png" alt="" />
                            <div className="absolute top-2 left-2">
                                <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
                                    <FaHeart className='absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                                </button>
                            </div>

                            <div className="absolute bottom-2 right-2">
                                <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
                                    <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">$10</div>
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-4 items-center">
                            <p className="text-xl tet-bold text-[#f54748] ">
                                Kebab
                            </p>
                            <div className="flex flex-sm space-x-2 cursor-pointer">
                                <span className="font-normal text-[#fdc55e]">4.3</span>
                                <FaStar className='text-[#fdc55e]' size={16} />
                                <span className="font-medium">(4)</span>
                            </div>
                        </div>

                        <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendedFood
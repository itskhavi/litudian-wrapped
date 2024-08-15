import React from 'react';

const Moments = () => {
    return (
        <div
        className="flex flex-col items-center justify-center h-screen w-full text-white font-bold p-4 bg-cover bg-center"
        style={{ backgroundImage: `url('moments.svg')` }}
      >
        <div>
        <h1 className='font-semibold text-6xl text-[#ff4c00] mb-3'>Your shopping moments.</h1>
        <p className='text-orange-900'>Remember these moments?</p>

        <div className='mt-4 lg:flex lg:grow lg:gap-20 mt-4'>
            <div className='space-y-4'>
                <p className='text-3xl text-orange-900'>Your first shipment</p>
                <div className=' flex  text-center justify-center items-center'>
                <div className='relative  mr-8 items-center text-center justify-center'>
                     {/* Background circles */}
                    <div className="absolute w-28 h-28 bg-orange-200 rounded-full -left-10"></div>
                   
                    {/* Image container with border */}
                    <div className="relative w-45 h-45 bg-white rounded-full border-4 border-orange-500 flex items-center justify-center overflow-hidden z-10">
                        <img src="./sport.png" alt="Styled" className="w-28 h-28 object-cover my-auto" />
                    </div>
                </div>
                <p className='text-white text-center ml-2 mb-3 text-2xl'>Sports & Entertainment</p>
            </div>
            </div>
            <div className='space-y-4 '>
                <p className='text-3xl text-orange-900'>Your largest order</p>
                <div className=' flex  text-center justify-center items-center'>
                <div className='relative  mr-8 items-center text-center justify-center'>
                     {/* Background circles */}
                    <div className="absolute w-28 h-28 bg-orange-200 rounded-full -left-10"></div>
                   
                    {/* Image container with border */}
                    <div className="relative w-45 h-45 bg-white rounded-full border-4 border-orange-500 flex items-center justify-center overflow-hidden z-10">
                        <img src="./sport.png" alt="Styled" className="w-28 h-28 object-cover my-auto" />
                    </div>
                </div>
                <p className='text-white text-center ml-2 mb-3 text-2xl'>Electric Bike</p>
            </div>
            </div>
            <div className='space-y-4'>
                <p className='text-3xl text-orange-900'>Your fastest shipment</p>
                <div className=' flex  text-center justify-center items-center'>
                <div className='relative  mr-8 items-center text-center justify-center'>
                     {/* Background circles */}
                    <div className="absolute w-28 h-28 bg-orange-200 rounded-full -left-10"></div>
                   
                    {/* Image container with border */}
                    <div className="relative w-45 h-45 bg-white rounded-full border-4 border-orange-500 flex items-center justify-center overflow-hidden z-10">
                        <img src="./sport.png" alt="Styled" className="w-28 h-28 object-cover my-auto" />
                    </div>
                </div>
                <p className='text-white text-center ml-2 mb-3 text-2xl'>Branded Hoodies</p>
            </div>
            </div>
        </div>
        <p className='text-orange-900 text-2xl  mt-20'>Each shopping tells a story</p>
        </div>
      </div>
    );
}

export default Moments;

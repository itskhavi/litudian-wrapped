import React from 'react';

const Favorites = () => {
    return (
        <div className='lg:flex h-screen '>        
        <div className='w-1/4 bg-[#fa9d76] h-full relative'>
            <div className='absolute bottom-10 left-4'>
                <img src="./star.svg" alt="" className='h-20 w-20' />
                <p className='font-semibold text-orange-900 text-4xl'>Fashionistar</p>
            </div>
        </div>
        <div className='w-1/2 p-6 items-center justify-center '>
        <div>
            <div>
            <h1 className='font-semibold text-6xl text-[#ff4c00] mb-3'>Your Favorite Products</h1>
            <p className='font-semibold text-m text-orange-500'>You couldn't get enough of these items</p>
            </div>
        </div>
        {/* categories list */}
        <div className='space-y-4 mt-4'>
            {/* first category */}
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
             {/* Second category */}
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
             {/* Third category */}
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
        </div>
        <div className='w-1/4 bg-[#fa9d76] relative  h-full'>
        <div className='absolute top-10 left-4'>
                <img src="./star.svg" alt="" className='h-20 w-20' />
                <p className='font-semibold text-orange-900 text-4xl'>Fashionistar</p>
            </div>
        </div>
        
      </div>
    );
}

export default Favorites;

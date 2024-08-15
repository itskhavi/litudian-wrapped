import React from 'react';

const Highlights = () => {
    return (
        <div
        className="flex flex-col items-center justify-center h-screen w-full text-white font-bold p-4 bg-cover bg-center"
        style={{ backgroundImage: `url('favorites.svg')` }}
      > 
            <div>
                <div className='mt-4 mb-4'> 
                    <h1 className='text-6xl text-white font-semibold mb-4'>Litudian Highlights</h1>
                    <p className='text-2xl text-[#ff4c00]'>From electronics to Fashion, see which categories were the most popular among all Litudian customers this year.</p>
                </div>
                <div className='flex gap-4 grid grid-cols-2 w-full mt-4'>
                <div className='space-y-4 mt-4'>
            {/* first category */}
            <div className=' flex  text-center justify-center items-center'>
                <div className='relative  mr-8 items-center text-center justify-center'>
                     {/* Background circles */}
                    <div className="absolute w-28 h-28 bg-[#fa9d76] rounded-full -left-10"></div>
                    <div className="absolute w-28 h-28 bg-[#fa9d76] rounded-full -right-10"></div>
                    {/* Image container with border */}
                    <div className="relative w-45 h-45 bg-white rounded-full border-4 border-orange-500 flex items-center justify-center overflow-hidden z-10">
                        <img src="./sport.png" alt="Styled" className="w-28 h-28 object-cover my-auto" />
                    </div>
                </div>
                <p className='text-white text-2xl text-center ml-4 mb-3'>Sports & Entertainment</p>
            </div>
             {/* Second category */}
             <div className=' flex  text-center justify-center items-center'>
                <div className='relative  mr-8 items-center text-center justify-center'>
                     {/* Background circles */}
                    <div className="absolute w-28 h-28 bg-[#fa9d76] rounded-full -left-10"></div>
                    <div className="absolute w-28 h-28 bg-[#fa9d76] rounded-full -right-10"></div>
                    {/* Image container with border */}
                    <div className="relative w-45 h-45 bg-white rounded-full border-4 border-orange-500 flex items-center justify-center overflow-hidden z-10">
                        <img src="./sport.png" alt="Styled" className="w-28 h-28 object-cover my-auto" />
                    </div>
                </div>
                <p className='text-white text-2xl text-center ml-4 mb-3'>Sports & Entertainment</p>
            </div>
             {/* Third category */}
             <div className=' flex  text-center justify-center items-center'>
                <div className='relative  mr-8 items-center text-center justify-center'>
                     {/* Background circles */}
                    <div className="absolute w-28 h-28 bg-[#fa9d76] rounded-full -left-10"></div>
                    <div className="absolute w-28 h-28 bg-[#fa9d76] rounded-full -right-10"></div>
                    {/* Image container with border */}
                    <div className="relative w-45 h-45 bg-white rounded-full border-4 border-orange-500 flex items-center justify-center overflow-hidden z-10">
                        <img src="./sport.png" alt="Styled" className="w-28 h-28 object-cover my-auto" />
                    </div>
                </div>
                <p className='text-white text-2xl text-center ml-4 mb-3'>Sports & Entertainment</p>
            </div>
                 </div>
                 <div className='space-y-4 mt-4'>
            {/* first category */}
            <div className=' flex  text-center justify-center items-center'>
                <div className='relative  mr-8 items-center text-center justify-center'>
                     {/* Background circles */}
                    <div className="absolute w-28 h-28 bg-[#fa9d76] rounded-full -left-10"></div>
                    <div className="absolute w-28 h-28 bg-[#fa9d76] rounded-full -right-10"></div>
                    {/* Image container with border */}
                    <div className="relative w-45 h-45 bg-white rounded-full border-4 border-orange-500 flex items-center justify-center overflow-hidden z-10">
                        <img src="./sport.png" alt="Styled" className="w-28 h-28 object-cover my-auto" />
                    </div>
                </div>
                <p className='text-white text-2xl text-center ml-4 mb-3'>Sports & Entertainment</p>
            </div>
             {/* Second category */}
             <div className=' flex  text-center justify-center items-center'>
                <div className='relative  mr-8 items-center text-center justify-center'>
                     {/* Background circles */}
                    <div className="absolute w-28 h-28 bg-[#fa9d76] rounded-full -left-10"></div>
                    <div className="absolute w-28 h-28 bg-[#fa9d76] rounded-full -right-10"></div>
                    {/* Image container with border */}
                    <div className="relative w-45 h-45 bg-white rounded-full border-4 border-orange-500 flex items-center justify-center overflow-hidden z-10">
                        <img src="./sport.png" alt="Styled" className="w-28 h-28 object-cover my-auto" />
                    </div>
                </div>
                <p className='text-white text-2xl text-center ml-4 mb-3'>Sports & Entertainment</p>
            </div>
             {/* Third category */}
             <div className=' flex  text-center justify-center items-center'>
                <div className='relative  mr-8 items-center text-center justify-center'>
                     {/* Background circles */}
                    <div className="absolute w-28 h-28 bg-[#fa9d76] rounded-full -left-10"></div>
                    <div className="absolute w-28 h-28 bg-[#fa9d76] rounded-full -right-10"></div>
                    {/* Image container with border */}
                    <div className="relative w-45 h-45 bg-white rounded-full border-4 border-orange-500 flex items-center justify-center overflow-hidden z-10">
                        <img src="./sport.png" alt="Styled" className="w-28 h-28 object-cover my-auto" />
                    </div>
                </div>
                <p className='text-white text-2xl text-center ml-4 mb-3'>Sports & Entertainment</p>
            </div>
        </div>
        
                </div>
            </div>
        </div>
    );
}

export default Highlights;

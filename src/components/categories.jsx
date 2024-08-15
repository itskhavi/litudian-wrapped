import React from 'react';

const Categoriez = () => {
    return (
        <div
        className="flex flex-col items-center justify-center h-screen w-full text-white text-3xl font-bold p-4 bg-cover bg-center"
        style={{ backgroundImage: `url('categories.svg')` }}
      >
        <div>
            <div>
            <h1 className='font-semibold text-8xl text-orange-900 mb-3'>Your Top Categories</h1>
            <p className='font-semibold text-m text-orange-900'>These categories made up majority of your shipments in the last 3 years.</p>
            </div>
        </div>
        {/* categories list */}
        <div className='space-y-4 mt-4'>
            {/* first category */}
            <div className=' flex  text-center justify-center items-center'>
                <div className='relative  mr-8 items-center text-center justify-center'>
                     {/* Background circles */}
                    <div className="absolute w-28 h-28 bg-orange-200 rounded-full -left-10"></div>
                    <div className="absolute w-28 h-28 bg-orange-200 rounded-full -right-10"></div>
                    {/* Image container with border */}
                    <div className="relative w-45 h-45 bg-white rounded-full border-4 border-orange-500 flex items-center justify-center overflow-hidden z-10">
                        <img src="./sport.png" alt="Styled" className="w-28 h-28 object-cover my-auto" />
                    </div>
                </div>
                <p className='text-orange-900 text-center ml-4 mb-3'>Sports & Entertainment</p>
            </div>
             {/* Second category */}
             <div className=' flex  text-center justify-center items-center'>
                <div className='relative  mr-8 items-center text-center justify-center'>
                     {/* Background circles */}
                    <div className="absolute w-28 h-28 bg-orange-200 rounded-full -left-10"></div>
                    <div className="absolute w-28 h-28 bg-orange-200 rounded-full -right-10"></div>
                    {/* Image container with border */}
                    <div className="relative w-45 h-45 bg-white rounded-full border-4 border-orange-500 flex items-center justify-center overflow-hidden z-10">
                        <img src="./sport.png" alt="Styled" className="w-28 h-28 object-cover my-auto" />
                    </div>
                </div>
                <p className='text-orange-900 text-center ml-4 mb-3'>Sports & Entertainment</p>
            </div>
             {/* Third category */}
             <div className=' flex  text-center justify-center items-center'>
                <div className='relative  mr-8 items-center text-center justify-center'>
                     {/* Background circles */}
                    <div className="absolute w-28 h-28 bg-orange-200 rounded-full -left-10"></div>
                    <div className="absolute w-28 h-28 bg-orange-200 rounded-full -right-10"></div>
                    {/* Image container with border */}
                    <div className="relative w-45 h-45 bg-white rounded-full border-4 border-orange-500 flex items-center justify-center overflow-hidden z-10">
                        <img src="./sport.png" alt="Styled" className="w-28 h-28 object-cover my-auto" />
                    </div>
                </div>
                <p className='text-orange-900 text-center ml-4 mb-3'>Sports & Entertainment</p>
            </div>
        </div>
      </div>
    );
}

export default Categoriez;

import React from 'react';

const Stats = () => {
    return (
        <div
        className="flex flex-col items-center justify-center h-screen w-full text-white font-bold p-4 bg-cover bg-center"
        style={{ backgroundImage: `url('favorites.svg')` }}
      >       
        <div>
        <div className='mt-8'>
            <h1 className='font-semibold text-6xl text-[#ff4c00] mb-3'>Your Shopping Stats</h1>
            <p className='font-semibold text-m text-white'>in the last 3 years.</p>
            </div>

            <div className='flex justify-center w-[80%] p-6 mx-auto space-x-10 mt-4 mb-4'>
                <div className='text-center text-white'>
                    <h1 className='text-8xl font-semibold text-white'>6</h1>
                    <p className='text-2xl'>Number of items shipped</p>
                </div>
                <div className='text-center text-white'>
                    <h1 className='text-8xl font-semibold text-white'>3</h1>
                    <p className='text-2xl'>Average shipping time in days.</p>
                </div>
            </div>

            <div className='text-center'>
                    <h1 className='text-2xl font-semibold text-orange-500'>Frequent shipping destination:</h1>
                    <p className='text-4xl text-white'>ONGATA RONGAI</p>
                </div>
        </div>


        
        
      </div>
    );
}

export default Stats;

import React from 'react';

const Feedback = () => {
    return (
        <div
        className="flex flex-col items-center justify-center h-screen w-full text-white  p-4 bg-cover bg-center"
        style={{ backgroundImage: `url('moments.svg')` }}
      > 
      <div>
      <h1 className='text-6xl text-[#ff4c00] mb-4'>What Others Are Saying</h1>
      <p className='text-orange-900 text-2xl'>Here's what other Litudian customers have to say about their shipping experiences.</p>

      <div>
        <div className='mt-6 mb-6'>
            <p className='text-xl text-gray-900 font-semibold'>"Litudian has made my shopping experience easier for my small business"</p>
            <p className='text-2xl text-orange-900'>K Maria</p>
        </div>
        <div>
            <p className='text-xl text-gray-900 font-semibold'>"Litudian has made my shopping experience easier for my small business"</p>
            <p className='text-2xl text-orange-900'>K Maria</p>
        </div>
      </div>
      </div>
            
        </div>
    );
}

export default Feedback;

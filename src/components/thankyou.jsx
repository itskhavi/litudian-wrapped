import React from 'react';

const Thankyou = () => {
    return (
        <div
        className="flex flex-col items-center justify-center h-screen w-full text-white  p-4 bg-cover bg-center"
        style={{ backgroundImage: `url('favorites.svg')` }}
      > 
      <div>
        <h1 className='text-6xl font-semibold text-[#ff4c00]'>Thank You</h1>
        <p>for being part of Litudian family.</p>

        <p className='mt-8 text-white text-3xl '>
            We look foward to serving you in 2025 with even more exciting shipments and experiences.
        </p>
      </div>
            
        </div>
    );
}

export default Thankyou;

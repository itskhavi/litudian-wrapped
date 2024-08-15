import React from 'react';

const Intro2 = () => {
    return (
        <div
        className="flex flex-col items-center justify-center h-screen w-full text-white text-3xl font-bold p-4 bg-cover bg-center"
        style={{ backgroundImage: `url('intro2-bg.svg')` }}
      >
        <h1 className='font-semibold text-8xl'>Your Years with Litudian</h1>
        <p className='font-medium text-m'>Discover your unique shopping journey with us.</p>
      </div>
    );
}

export default Intro2;

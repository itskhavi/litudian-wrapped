import React from 'react';

const Intro = () => {
    return (
        <div
        className="flex flex-col items-center justify-center h-screen w-full text-white text-3xl font-bold p-4 bg-cover bg-center"
        style={{ backgroundImage: `url('/bg.svg')` }}
      >
        <h1 className='font-semibold md:text-8xl sm:text-4xl mb-4'>Litudian Wrapped</h1>
             <div className='bg-white rounded-full h-200 w-200 p-10 mx-auto'>
                <img src='./litudian-logo.svg' alt='Logo'/>
             </div>
      </div>
    );
}

export default Intro;

import React from 'react';

const Persona = () => {
    return (
        <div
        className="flex flex-col items-center justify-center h-screen w-full text-white text-3xl font-bold p-4 bg-cover bg-center"
        style={{ backgroundImage: `url('persona.svg')` }}
      >
        <h1 className='font-semibold text-8xl text-orange-600 mb-3'>Meet your Shopping Persona</h1>
        <p className='font-semibold text-m text-orange-900'>Whether you love gadgets or fashion, see how your choices define you.</p>
        <p className='text-orange-900 font-medium mt-3'>Based on your shipping habits, you are a <span className='text-orange-500 font-semibold'>Fashionistar</span></p>
      </div>
    );
}

export default Persona;

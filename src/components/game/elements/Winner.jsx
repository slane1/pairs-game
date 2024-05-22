import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GameContext } from '../../context/GameContext';

export default function Winner() {
    const navigate = useNavigate();
    const { missed, setMissed, setSolved, setWin, setTable } = useContext(GameContext);


    function handleClick() {
        setTable({
            size: 18,
            cards: []
        });
        setSolved([]);
        setMissed(0);
        setWin(false);
        navigate('/');
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
        <div className="flex flex-col items-center w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h1 className='text-xl font-bold'>You Won!</h1>
          <p className='mt-1'>You missed {missed} flips.</p>
          <button onClick={handleClick} className="mt-5 w-auto text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Home</button>
        </div>
      </div>
    );
}
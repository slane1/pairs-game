import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GameContext } from '../context/GameContext';

export default function Header() {
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
        <header className="flex justify-between items-center mr-10 ml-10 mt-1">
            <div>
                <h2>Memory Card Game</h2>
            </div>
                {missed ? 
            <div className='flex flex-col items-center'>
                <p>Failed Attempt</p>
                <p>{missed}</p>
            </div>
                : null}
        <div>
            <nav>
                <ul>
                    <button onClick={handleClick} className="mt-5 w-auto text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800">Restart</button>
                </ul>
            </nav>
        </div>
        </header>
    );
}
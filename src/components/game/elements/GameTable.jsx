import React, { useContext, useEffect } from 'react';
import { GameContext } from '../../context/GameContext.jsx';
import Card from './Card.jsx';
import Header from '../../page/Header.jsx';
import Winner from './Winner.jsx';


export default function GameTable() {
    const { table, win } = useContext(GameContext);

    return (
        <>
        {win === true ? <Winner /> :
        <div className='flex flex-col min-h-screen'>
            <Header />
            <div id='game' className='flex flex-col flex-grow items-center'>
                <div className="p-5 flex-grow items-center grid xl:grid-cols-6 md:grid-cols-3 gap-10 grid-cols-2 sm:gap-2">
                    {table.cards.map((data) => (
                        <Card key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </div>
        }
        </>
    );
}
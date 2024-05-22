import { useState, useContext, useEffect, require } from "react";
import { GameContext } from "../../context/GameContext";
import './Card.css';
import Questionmark from '../../../assets/question.svg';


export default function Card({data}) {
    const { table, solved, flippedCards, setFlippedCards} = useContext(GameContext);
    const [flipped, setFlipped] = useState(false);


    function handleFlip() {
      if (flippedCards.length === 2) {
        return;
    } else if (!flipped) {
            setFlippedCards([...flippedCards, data]);
    }
}
    useEffect(() => {
        if (flippedCards.includes(data) || solved.includes(data)) {
            setFlipped(true);
        } else {
            setFlipped(false);
        }
    }, [flippedCards, solved]);

    return (
        <div>
      <div className={table.size === 18 ? 'scene scene--card lg:w-44 lg:h-44 xl:h-48 xl:w-48 2xl:h-60 2xl:w-60 h-36 w-36 m-1' : 'scene scene--card lg:w-40 lg:h-40 xl:h-45 xl:w-45 2xl:h-48 2xl:w-48 h-30 w-30 m-1'} onClick={handleFlip}>
        <div className={`card ${flipped ? 'is-flipped' : ''}`}>
          <div className="card__face bg-card p-2 flex items-center border border-gray-200 rounded-2xl">
            <img src={Questionmark} alt="card" />
          </div>
          <div className="flex items-center justify-center p-2 card__face card__face--back rounded-2xl">
            <img className="rounded-xl" src={`/images/${data.content}`} alt="ALT" />
            </div>
        </div>
      </div>
        </div>
    );
}
import initialCards from '../util/CardDeck.json';
import { useNavigate } from 'react-router-dom';
import { GameContext } from '../context/GameContext';
import { useState, useContext } from 'react';

export default function Game() {
    const navigate = useNavigate();
    const { table, setTable, setWin, setMissed } = useContext(GameContext);
    const [deck, setDeck] = useState([]);
    const [size, setSize] = useState(18);

    
    function createId() {
      const id = Math.floor(Math.random() * 100000);
      if (deck.find((card) => card.id === id)) {
        createId();
      } else {
        return id;
      }
    }
    
    async function createDeck() {
      while (deck.length < size) {
        let randomCard = initialCards[Math.floor(Math.random() * initialCards.length)];
        if (!deck.some((card) => card.content === randomCard.content)) {
            for (let i = 0; i < 2; i++) {
              const id = await createId();
              deck.push({ ...randomCard, id: id });
            }
        }
      }
      while (table.cards.length < size ) {
        let randomDeckCard = deck[Math.floor(Math.random() * deck.length)];
        table.cards.push(randomDeckCard);
        deck.splice(deck.indexOf(randomDeckCard), 1);
      }
      if (table.cards.length === size) {
        navigate('/game');
      }
    }




    return (
          <div className='flex flex-col items-center justify-center h-screen'>
            <div className="flex flex-col items-center w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h1 className='text-xl font-bold'>Welcome to my Pairs-Game</h1>
              <p className='mt-4'>Select deck size</p>
                <div className='flex space-x-4 mt-2'>
                  <label className='flex items-center'>
                    <input
                      type="radio"
                      name="size"
                      value={18}
                      checked={size === 18}
                      onChange={() => {
                        setSize(18);
                        setTable(
                          {
                            size: 18,
                            cards: [
                            ]
                          })
                        }}
                      className="form-radio h-4 w-4 text-green-600"
                    />
                    <span className='ml-2'>18</span>
                  </label>
                  <p>or</p>
                  <label className='flex items-center'>
                    <input
                      type="radio"
                      name="size"
                      value={24}
                      checked={size === 24}
                      onChange={() => {
                        setSize(24);
                        setTable(
                          {
                            size: 24,
                            cards: [
                            ]
                          })
                        }}
                      className="form-radio h-4 w-4 text-green-600"
                    />
                    <span className='ml-2'>24</span>
                  </label>
                </div>
              <p className='mt-4'>Click on the Button to create a new Deck</p>
              <p className='mt-1'>The game will start automatically</p>
              <button onClick={createDeck} className="mt-5 w-auto text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Start</button>
            </div>
          </div>
    );
}
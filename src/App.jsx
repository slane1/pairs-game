import { Routes, Route } from "react-router-dom";
import Game from './components/game/Game'
import GameTable from "./components/game/elements/GameTable";


export default function App() {
    return (
            <Routes>
                <Route path="/" element={<Game />} />
                <Route path="/game" element={<GameTable />} />
            </Routes>
    )
}

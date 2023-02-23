import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGames } from '../redux/reducers/gamesReducer';

const Home = () => {
    const games = useSelector((state) => state.games.game);
    const [gameInput, setGameInput] = useState('');
    const dispatch = useDispatch();

    const searchGame = (e) => {
        setGameInput(e.target.value);
      };

    useEffect(() => {
      dispatch(fetchGames());
    }, [dispatch]);

      let filteredGames = games ? games.slice(0, 25): [];
     if (gameInput.trim().length > 0) {
      filteredGames = games.filter((obj) => (
        obj.title.toLowerCase().includes(gameInput.toLowerCase())
      ));
    } 
    return (
      <main className="games">
        <input type="text"  value={gameInput} placeholder="Search your game by name.." onChange={searchGame}/>
            {filteredGames.map((game) => (
            <div className="single-game" key={game.id}>
              <Link to={`/Details/${game.title}`}>
                <img className="img-api" src={game.image} alt={game.title} />
                <p className="game-title">{game.title}</p>
              </Link>
            </div>
          ))} 
      </main>
    );
        };

export default Home;
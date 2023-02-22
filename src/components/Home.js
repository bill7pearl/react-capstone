import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGames } from '../redux/reducers/gamesReducer';

const Home = () => {
    // const games = useSelector((state) => state.games.game);
    const [charNameInput, setCharNameInput] = useState('');
    const dispatch = useDispatch();

    const inputCharNameChangeHandler = (e) => {
        setCharNameInput(e.target.value);
      };

    useEffect(() => {
      dispatch(fetchGames());
    }, [dispatch]);

    const games = useSelector((state) => state.games.game);
      let filterredCharacters = games ? games.slice(0, 25): [];
     if (charNameInput.trim().length > 0) {
      filterredCharacters = games.filter((item) => (
        item.title.toLowerCase().includes(charNameInput.toLowerCase())
      ));
    } 
    return (
      <main className="games">
        <input type="text"  value={charNameInput} placeholder="Enter your favourite Hogwarts character" onChange={inputCharNameChangeHandler}/>
         {/* {games && games.map((game) => (
          <main key={game.id} className="games-container">
          <div className="game-img"><img className="img-api" src={game.image} alt="" /></div>
          <div className="game-details">
            <h2>{game.title}</h2>
            <h4>{game.description}</h4>
          </div>
        </main>
        ))}  */}
            {filterredCharacters.map((game) => (
            <div className="mainContainer" key={game.id}>
              <Link to={`/Details/${game.title}`}>
                <img className="img-api" src={game.image} alt={game.title} />
                <p>{game.title}</p>
              </Link>
            </div>
          ))} 
      </main>
    );
        };

export default Home;
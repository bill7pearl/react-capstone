import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGames } from '../redux/reducers/gamesReducer';

const Games = () => {
  const games = useSelector((state) => state.games.game);
  const [gameInput, setGameInput] = useState('');
  const dispatch = useDispatch();

  const searchGame = (e) => {
    setGameInput(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  let filteredGames = games ? games.slice(0, 25) : [];
  if (gameInput.trim().length > 0) {
    filteredGames = games.filter((obj) => (
      obj.title.toLowerCase().includes(gameInput.toLowerCase())
    ));
  }
  return (
    <>
      <div className="input-container">
        <input type="text" value={gameInput} placeholder="Search your game by name.." onChange={searchGame} />
      </div>
      <section className="sm:grid sm:grid-cols-1 sm:gap-2 md:grid md:grid-cols-3 md:gap-4">
        {filteredGames.map((game) => (
          <Card key={game.id}>
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                className="w-full aspect"
                src={game.image}
                alt={game.title}
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {game.title}
              </Typography>
              <Typography>
                {game.description}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Link className="title-in-home" to={`/Details/${game.title}`}>
                <Button>Read More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </section>
    </>
  );
};

export default Games;

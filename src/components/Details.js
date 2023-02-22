import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function GameDetails() {
  const { gameName } = useParams();

  const games = useSelector((state) => state.games.game);
  const game = games ? games.find((item) => item.title === gameName):[];
  return (
    <main>
      <ul>
        {games && (
          <>
             <li>
              <img src={game?.image} alt={game?.title} />
            </li> 
            <div>
              <li>
                Name:
                {game?.title}
              </li>
              <li>
                Description:
                {game?.description}
              </li>
              <li>
                Publisher:
                {game?.publisher}
              </li>
              <li>
                genre:
                {game?.genre}
              </li>
              <li>
                Release date:
                {game?.releaseDate}
              </li>
            </div>
          </>
        )}
        {!game && <p>No Games are Found!</p>}
      </ul>
    </main>
  );
}

export default GameDetails;
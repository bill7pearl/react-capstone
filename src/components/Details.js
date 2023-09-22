import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function GameDetails() {
  const { gameName } = useParams();

  const games = useSelector((state) => state.games.game);
  const game = games ? games.find((item) => item.title === gameName) : [];
  return (
    <main className="container mx-auto">
      {games && (
      <>
        <h3 className="details-title">
          Name:
          <span className="details-content">
            {' '}
            {game?.title}
          </span>
        </h3>
        <img src={game?.image} alt={game?.title} />
        <div className="game-details">
          <h3 className="details-title">
            Description:
            <span className="details-content">
              {' '}
              {game?.description}
            </span>
          </h3>
          <h3 className="details-title">
            Publisher:
            <span className="details-content">
              {' '}
              {game?.publisher}
              .
            </span>
          </h3>
          <h3 className="details-title">
            genre:
            <span className="details-content">
              {' '}
              {game?.genre}
              .
            </span>
          </h3>
          <h3 className="details-title">
            Release date:
            <span className="details-content">
              {' '}
              {game?.releaseDate}
              .
            </span>
          </h3>
        </div>
      </>
      )}
      {!game && <p>No Games are Found!</p>}
    </main>
  );
}

export default GameDetails;

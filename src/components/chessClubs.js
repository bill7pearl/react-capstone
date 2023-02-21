import React from 'react';
// import PropTypes from 'prop-types';

const ChessClub = ({
    title, image, description,
}) => {

  return (
    <main className="chess-club">
      <div className="club-img"><img className="img-api" src={image} alt="" /></div>
      <div className="club-details">
        <h2>{title}</h2>
        <h4>{description}</h4>
      </div>
    </main>
  );
};

/* ChessClub.propTypes = {
  character: PropTypes.string.isRequired,
  anime: PropTypes.any.isRequired,
  quote: PropTypes.string.isRequired,
}; */

export default ChessClub;

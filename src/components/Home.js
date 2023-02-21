import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ChessClub from './chessClubs';
import { fetchClubs } from '../redux/reducers/chessReducer';

const Home = () => {
    const clubs = useSelector((state) => state.clubs.club);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchClubs());
    }, [dispatch]);
    return (
      <main className="clubs-container">
        {clubs && clubs.map((club) => (
          <ChessClub
            key={club.id}
            title={club.title}
            image={club.image}
            description={club.description}
          />
        ))}
      </main>
    );
        };

export default Home;
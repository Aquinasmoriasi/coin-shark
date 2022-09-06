import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeagues } from '../redux/leagues/leagues';

const Leagues = () => {
  const dispatch = useDispatch();
  const leagues = useSelector((state) => state.leagues);
  useEffect(() => {
    if (leagues.length === 0) {
      dispatch(fetchLeagues());
    }
  }, [dispatch, leagues.length]);

  const style = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  };

  const style2 = {
    width: 'auto',
    height: '25vh',
    backgroundSize: '30% 30%',
    backgroundRepeat: 'no-repeat',
    border: '1px solid blue',
    backgroundColor: '#ff9f00',
  };

  return (
    <div style={style}>
      {leagues.map((league) => (
        <div key={league.id}>
          <div style={{ ...style2, backgroundImage: `url(${league.logo})` }}>
            {league.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leagues;

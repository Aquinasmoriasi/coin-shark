import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiFootball } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { fetchLeagues, fetchTables } from '../redux/leagues/leagues';

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
    color: '#fff',
  };

  const style2 = {
    width: 'auto',
    height: '25vh',
    backgroundSize: '60%',
    backgroundRepeat: 'no-repeat',
    color: '#fff',
    fontSize: '18px',
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'flex-end',
    textAlign: 'end',
    flexWrap: 'wrap',
  };

  const style3 = {
    width: 'auto',
    height: '25vh',
    backgroundSize: 'contain',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    bacgroundColor: 'rgb(25, 255, 255)',
  };

  const handleFetchTable = (e) => {
    const { id } = e.target.parentNode.parentNode;
    if (id) {
      dispatch(fetchTables(id));
    }
  };

  return (
    <>
      {leagues.length && (
        <>
          <h2>
            Top League
            <span>
              <BiFootball />
            </span>
          </h2>
          <div
            style={{ ...style3, backgroundImage: `url(${leagues[5].logo})` }}
          >
            {leagues[5].name}
          </div>
        </>
      )}
      <h3>All Leagues</h3>
      <div style={style} className="league-container">
        {leagues.map((league) => (
          <div key={league.id} id={league.id} className="leagues">
            <NavLink to="/Table">
              <BiFootball onClick={handleFetchTable} />
            </NavLink>
            <div style={{ ...style2, backgroundImage: `url(${league.logo})` }}>
              {league.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Leagues;

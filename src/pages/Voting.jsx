import { TopMenu } from 'components/TopMenu';
import { useEffect, useState, useRef } from 'react';
import {
  addCatToLikes,
  getRandomCat,
  addCatToDislikes,
  addCatToFavourites,
} from 'utils/catsApi';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Voting = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const backPathUrl = useRef(location.state?.from ?? '/');
  const userLog = [];

  const [randomCat, setRandomCat] = useState({});
  useEffect(() => {
    getRandomCat(1)
      .then(setRandomCat)
      .catch(error => {
        console.log(error);
        navigate(backPathUrl.current, { replace: true });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const LikesHandler = () => {
    addCatToLikes(randomCat.id);
    userLog.push(`Image ID: ${randomCat.id} was opened`);
    console.log(userLog);
  };
  console.log(userLog);
  return (
    <div>
      <TopMenu />
      <div>
        <Link to={backPathUrl.current}>Back</Link>
        <h1>VOTING</h1>
        <img src={randomCat.url} alt={randomCat.id}></img>
        <button tupe="button" onClick={LikesHandler}>
          Add to likes
        </button>
        <button
          tupe="button"
          onClick={() => {
            addCatToFavourites(randomCat.id);
          }}
        >
          Add to favoutites
        </button>
        <button
          tupe="button"
          onClick={() => {
            addCatToDislikes(randomCat.id);
          }}
        >
          Add to dislikes
        </button>

        <ul>
          {userLog.map(log => (
            <li>{log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

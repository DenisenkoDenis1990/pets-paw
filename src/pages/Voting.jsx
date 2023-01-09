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
  const [userLog, setUserLog] = useState(
    JSON.parse(localStorage.getItem('userLog')) ?? []
  );

  const [randomCat, setRandomCat] = useState({});
  useEffect(() => {
    getRandomCat(1)
      .then(setRandomCat)
      .catch(error => {
        console.log(error);
        navigate(backPathUrl.current, { replace: true });
      });
    localStorage.setItem('userLog', JSON.stringify(userLog));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLog]);
  const likesHandler = () => {
    addCatToLikes(randomCat.id);
    getRandomCat(1)
      .then(setRandomCat)
      .catch(error => {
        console.log(error);
      });
    setUserLog(prevState => [
      ...prevState,
      {
        date: Date.now(),
        message: `Image ID: ${randomCat.id} was added to Likes`,
      },
    ]);
  };
  const dislikesHandler = () => {
    addCatToDislikes(randomCat.id);
    getRandomCat(1)
      .then(setRandomCat)
      .catch(error => {
        console.log(error);
      });
    setUserLog(prevState => [
      ...prevState,
      {
        date: Date.now(),
        message: `Image ID: ${randomCat.id} was added to Dislikes`,
      },
    ]);
  };
  const favsHandler = () => {
    addCatToFavourites(randomCat.id);
    getRandomCat(1)
      .then(setRandomCat)
      .catch(error => {
        console.log(error);
      });
    setUserLog(prevState => [
      ...prevState,
      {
        date: Date.now(),
        message: `Image ID: ${randomCat.id} was added to Favourites`,
      },
    ]);
  };

  return (
    <div>
      <TopMenu />
      <div>
        <Link to={backPathUrl.current}>Back</Link>
        <h1>VOTING</h1>
        <img src={randomCat.url} alt={randomCat.id}></img>
        <button tupe="button" onClick={likesHandler}>
          Add to likes
        </button>
        <button tupe="button" onClick={favsHandler}>
          Add to favoutites
        </button>
        <button tupe="button" onClick={dislikesHandler}>
          Add to dislikes
        </button>
      </div>
      <ul>
        {userLog.reverse().map(log => {
          let dateString = log.date.toString();
          console.log(typeof dateString);
          return (
            <li>
              <p>{log.message}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

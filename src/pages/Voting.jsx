import { TopMenu } from 'components/TopMenu';
import { useEffect, useState, useRef } from 'react';
import {
  addCatToLikes,
  getRandomCat,
  addCatToDislikes,
  addCatToFavourites,
} from 'utils/catsApi';
import { ReactComponent as BackIcon } from 'icons/back-20.svg';
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
      <div className="mt-[10px] p-[20px] bg-white rounded-[20px]">
        <div className="flex justify-start items-center pb-[20px]">
          <Link
            to={backPathUrl.current}
            className="inline-block group bg-[#FBE0DC] py-[10px] px-[14px] rounded-[10px] hover:bg-[#FF868E] mr-[10px]"
          >
            <BackIcon className="fill-[#FF868E] group-hover:fill-white" />
          </Link>
          <h1 className="py-[5px] px-[30px] text-[20px] text-center text-white bg-[#FF868E] rounded-[10px] tracking-[2px] leading-[30px]">
            VOTING
          </h1>
        </div>
        <img
          src={randomCat.url}
          alt={randomCat.id}
          className="max-[640px] h-[360px] bg-center bg-no-repeat bg-contain rounded-[20px] mx-auto"
        ></img>
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

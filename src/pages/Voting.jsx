import { TopMenu } from 'components/TopMenu';
import { useEffect, useState, useRef } from 'react';
import {
  addCatToLikes,
  getRandomCat,
  addCatToDislikes,
  addCatToFavourites,
} from 'utils/catsApi';
import { ReactComponent as BackIcon } from 'icons/back-20.svg';
import { ReactComponent as LikeIcon } from 'icons/like-white-30.svg';
import { ReactComponent as FavIcon } from 'icons/fav-white-30.svg';
import { ReactComponent as DislikeIcon } from 'icons/dislike-white-30.svg';
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
        message: `date Image ID: ${randomCat.id} was added to Dislikes`,
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
        <div className="relative mb-[52px]">
          <img
            src={randomCat.url}
            alt={randomCat.id}
            className="max-[640px] h-[360px] bg-center bg-no-repeat bg-contain rounded-[20px] mx-auto"
          ></img>
          <div className="absolute bottom-[-40px] left-[30%] ">
            <button
              tupe="button"
              onClick={likesHandler}
              className="group bg-[#97EAB9] hover:bg-[rgba(151,234,186,0.5)] p-[25px] border-l-[4px] border-t-[4px] border-b-[4px] border-[solid] border-[#FFFFFF] rounded-l-[20px]"
            >
              <LikeIcon className="fill-white group-hover:fill-[#97EAB9]" />
            </button>
            <button
              tupe="button"
              onClick={favsHandler}
              className="group bg-[#FF868E] hover:bg-[rgba(255,134,142,0.3)] p-[25px] border-[4px] border-[solid] border-[#FFFFFF]"
            >
              <FavIcon className="fill-white group-hover:fill-[#FF868E]" />
            </button>
            <button
              tupe="button"
              onClick={dislikesHandler}
              className="group bg-[#FFD280] hover:bg-[rgba(255,210,128,0.3)] p-[25px] border-r-[4px] border-t-[4px] border-b-[4px] border-[solid] border-[#FFFFFF] rounded-r-[20px]"
            >
              <DislikeIcon className="fill-white group-hover:fill-[#FFD280]" />
            </button>
          </div>
        </div>
        <ul>
          {userLog.reverse().map(log => {
            let dateString = log.date.toString();
            console.log(dateString);
            return (
              <li className="bg-[#F8F8F7] mb-[10px] p-[20px] rounded-[10px]">
                {log.message.includes('Dislikes') && (
                  <p className="flex align-center justify-between">
                    {log.message}{' '}
                    <DislikeIcon className="fill-[#FFD280] w-[20px] h-[20px]" />
                  </p>
                )}
                {log.message.includes('Likes') && (
                  <p className="flex align-center justify-between">
                    {log.message}{' '}
                    <LikeIcon className="fill-[#97EAB9] w-[20px] h-[20px]" />
                  </p>
                )}
                {log.message.includes('Favourites') && (
                  <p className="flex align-center justify-between">
                    {log.message}{' '}
                    <FavIcon className="fill-[#FF868E] w-[20px] h-[20px]" />
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

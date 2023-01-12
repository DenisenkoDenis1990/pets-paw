import { Link } from 'react-router-dom';
import { ReactComponent as LikeIcon } from 'icons/like-30.svg';
import { ReactComponent as DislikeIcon } from 'icons/dislike-30.svg';
import { ReactComponent as FavIcon } from 'icons/fav-30.svg';
import { ReactComponent as SearchIcon } from 'icons/search-20.svg';
export const TopMenu = () => {
  return (
    <div>
      <div className="flex">
        <form className="relative basis-2/3 mr-[10px] group">
          <input
            type="text"
            placeholder="Search for breeds by name"
            className="text-[20px] leading-[30px] pl-[20px] py-[15px] pr-[10px] rounded-[20px] w-[470px] outline-[0px] group-hover:outline-[#FBE0DC] group-hover:outline-[2px] group-focus:outline-[#FF868E] group-focus:outline-[2px]"
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-[10px] p-[10px] my-[10px] bg-[#FBE0DC] rounded-[10px] group-hover:bg-[#FF868E]"
          >
            <SearchIcon className="fill-[#FF868E] group-hover:fill-white" />
          </button>
        </form>
        <ul className="flex">
          <li className="mr-[10px] group">
            <Link to={'/likes'}>
              <button
                type="button"
                className="p-[15px] bg-white rounded-[20px] group-hover:bg-[#FBE0DC] group-active:bg-[#FF868E]"
              >
                <LikeIcon className="fill-[#FF868E] group-active:fill-[#FFFFFF]" />
              </button>
            </Link>
          </li>
          <li className="mr-[10px] group">
            <Link to={'/favourites'}>
              <button
                type="button"
                className="p-[15px] bg-white rounded-[20px] group-hover:bg-[#FBE0DC] group-active:bg-[#FF868E]"
              >
                <FavIcon className="fill-[#FF868E] group-active:fill-[#FFFFFF]" />
              </button>
            </Link>
          </li>
          <li className="group">
            <Link to={'/dislikes'}>
              <button
                type="button"
                className="p-[15px] bg-white rounded-[20px] group-hover:bg-[#FBE0DC] group-active:bg-[#FF868E]"
              >
                <DislikeIcon className="fill-[#FF868E] group-active:fill-[#FFFFFF]" />
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

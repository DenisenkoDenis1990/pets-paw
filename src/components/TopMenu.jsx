import { Link } from 'react-router-dom';
export const TopMenu = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Search for breeds by name" />
        <button type="submit">Search</button>
      </form>
      <Link to={'/likes'}>Likes</Link>
      <Link to={'/favourites'}>Favourites</Link>
      <Link to={'/dislikes'}>Dislikes</Link>
    </div>
  );
};

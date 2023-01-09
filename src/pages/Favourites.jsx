import { useEffect, useState } from 'react';
import { getFavourites } from 'utils/catsApi';

export const Favourites = () => {
  const [favs, setFavs] = useState([]);
  useEffect(() => {
    getFavourites()
      .then(setFavs)
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Favourites</h1>
      <ul>
        {favs.map(fav => {
          return (
            <li key={fav.id}>
              <img src={fav.image.url} alt={fav.image.id}></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

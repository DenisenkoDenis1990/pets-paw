import { TopMenu } from 'components/TopMenu';
import { useState, useEffect, useRef } from 'react';
import { getBreeds } from 'utils/catsApi';
import { Link, useLocation } from 'react-router-dom';

export const Breeds = () => {
  const [breeds, setBreeds] = useState([]);
  const location = useLocation();
  const backPathUrl = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getBreeds('')
      .then(setBreeds)
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <TopMenu />
      <div className="flex">
        <Link to={backPathUrl.current}>Back</Link>
        <h1>VOTING</h1>
        <select name="breeds" defaultValue={'All Breeds'}>
          <option value="all">All breeds</option>
          {breeds.map(breed => (
            <option value={breed.id} key={breed.id}>
              {breed.name}
            </option>
          ))}
        </select>
        <select name="limit" defaultValue={'Limit: 5'}>
          <option value={5}>Limit: 5</option>
          <option value={10}>Limit: 10</option>
          <option value={15}>Limit: 15</option>
          <option value={20}>Limit: 20</option>
          <option value={25}>Limit: 25</option>
        </select>
        <button type="button">Sorting from Z to A</button>
        <button type="button">Sorting from A to Z</button>
      </div>
      <div>
        {breeds.map(breed => {
          // console.log(breed.name, breed.image);

          return breed.name === 'European Burmese' ||
            breed.name === 'Malayan' ? (
            0
          ) : (
            <Link to={`/${breed.id}`}>
              <img
                src={breed.image.url}
                alt={breed.name}
                key={breed.id}
                width={'100px'}
                height={'100px'}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

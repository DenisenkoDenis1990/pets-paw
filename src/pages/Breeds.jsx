import { TopMenu } from 'components/TopMenu';
import { useState, useEffect, useRef } from 'react';
import { getBreeds, getRandomCat } from 'utils/catsApi';
import { Link, useLocation } from 'react-router-dom';

export const Breeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [cats, setCats] = useState([]);
  const [filter, setFilter] = useState('');
  const location = useLocation();
  const backPathUrl = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getBreeds('')
      .then(setBreeds)
      .catch(error => console.log(error));
    getRandomCat(5)
      .then(setCats)
      .catch(error => console.log(error));
  }, []);

  const limitHandler = event => {
    console.log(event.currentTarget.value);
    getRandomCat(event.currentTarget.value)
      .then(setCats)
      .catch(error => console.log(error));
  };

  const breedHandler = event => {
    setFilter(event.currentTarget.value);
  };

  let filteredCats = cats.filter(cat => {
    if (filter === 'all') {
      return cat;
    }
    return cat.breeds[0].id.includes(filter);
  });

  return (
    <div>
      <TopMenu />
      <div className="flex">
        <Link to={backPathUrl.current}>Back</Link>
        <h1>VOTING</h1>
        <select
          name="breeds"
          defaultValue={'All Breeds'}
          onInput={breedHandler}
        >
          <option value="all">All breeds</option>
          {breeds.map(breed => (
            <option value={breed.id} key={breed.id}>
              {breed.name}
            </option>
          ))}
        </select>
        <select name="limit" defaultValue={'Limit: 5'} onInput={limitHandler}>
          <option value={5}>Limit: 5</option>
          <option value={10}>Limit: 10</option>
          <option value={15}>Limit: 15</option>
          <option value={20}>Limit: 20</option>
          <option value={25}>Limit: 25</option>
        </select>
        <button type="button">Sorting from Z to A</button>
        <button type="button">Sorting from A to Z</button>
      </div>
      <div className="flex flex-wrap gap-3">
        {filteredCats.map(cat => {
          // console.log(cat.name, cat.image);

          return cat.name === 'European Burmese' || cat.name === 'Malayan' ? (
            0
          ) : (
            <Link to={`/${cat.id}`} state={{ cat: cat }}>
              <img
                src={cat.url}
                alt={cat.name}
                key={cat.id}
                className="w-[100px] h-[100px] backgroud bg-cover bg-center"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

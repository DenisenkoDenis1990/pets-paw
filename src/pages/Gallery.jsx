import { TopMenu } from 'components/TopMenu';
import { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getBreeds, getImagesForGallery } from 'utils/catsApi';
export const Gallery = () => {
  const location = useLocation();
  const backPathUrl = useRef(location.state?.from ?? '/');
  const [breeds, setBreeds] = useState([]);
  const [limit, setLimit] = useState('');
  const [order, setOrder] = useState('');
  const [cat, setCat] = useState('');
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    getBreeds('')
      .then(setBreeds)
      .catch(error => console.log(error));
  }, []);

  const limitHandler = event => {
    setLimit(event.currentTarget.value);
  };
  const orderHandler = event => {
    setOrder(event.currentTarget.value);
  };
  const catHandler = event => {
    setCat(event.currentTarget.value);
    console.log(cat);
  };

  const submitHandler = event => {
    event.preventDefault();
    getImagesForGallery(limit, cat, order)
      .then(setGallery)
      .catch(error => console.log(error));
  };

  return (
    <div>
      <TopMenu />
      <div>
        <Link to={backPathUrl.current}>Back</Link>
        <p>Gallery</p>
        <p>Upload</p>
        <form onSubmit={submitHandler}>
          <select name="order" defaultValue={'Random'} onInput={orderHandler}>
            <option value={'rand'}>Random</option>
            <option value={'desc'}>Desc</option>
            <option value={'asc'}>Asc</option>
          </select>
          <select name="breeds" defaultValue={''} onInput={catHandler}>
            <option value="">None</option>
            {breeds.map(breed => (
              <option value={breed.id} key={breed.id}>
                {breed.name}
              </option>
            ))}
          </select>
          <select
            name="limit"
            defaultValue={'5 items per page'}
            onInput={limitHandler}
          >
            <option value={5}>5 items per page</option>
            <option value={10}>10 items per page</option>
            <option value={15}>15 items per page</option>
            <option value={20}>20 items per page</option>
          </select>
          <select name="type" defaultValue={'Limit: Unlimited'}>
            <option value="all">All</option>
            <option value="static">Static</option>
            <option value="animated">Animated</option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
      <ul>
        {gallery.map(image => {
          return (
            <li key={image.id}>
              <img src={image.url} alt={image.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

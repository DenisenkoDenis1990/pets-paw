import { useEffect, useRef } from 'react';
import { TopMenu } from 'components/TopMenu';
import { Link, useLocation } from 'react-router-dom';
export const CatInfo = () => {
  const location = useLocation();
  const { cat } = location.state;
  const backPathUrl = useRef(location.state?.from ?? '/');

  useEffect(() => {});

  return (
    <div>
      <TopMenu />
      <div>
        <Link to={backPathUrl.current}>Back</Link>
        <p>Breeds</p>
        <p>{cat.id}</p>
        <img src={cat.image.url} alt={cat.name}></img>
        <div>
          <h1>{cat.name}</h1>
          <p>{cat.description}</p>
          <p>
            <b>Temperament:</b>
          </p>
          <p> {cat.temperament}</p>
          <p>
            <b>Origin:</b>
          </p>
          <p> {cat.origin}</p>
          <p>
            <b>Weight:</b>
          </p>
          <p> {cat.weight.metric} kg</p>
          <p>
            <b>Life Span:</b>
          </p>
          <p> {cat.life_span} years</p>
        </div>
      </div>
    </div>
  );
};

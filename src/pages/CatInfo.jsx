import { useEffect, useRef } from 'react';
import { TopMenu } from 'components/TopMenu';
import { Link, useLocation } from 'react-router-dom';
export const CatInfo = () => {
  const location = useLocation();
  //   const { cat } = location.state;
  const backPathUrl = useRef(location.state?.from ?? '/');

  useEffect(() => {});

  return (
    <div>
      <TopMenu />
      <div>
        <Link to={backPathUrl.current}>Back</Link>
        <h1>Breeds</h1>
        {/* <p>{cat.breeds[0].id}</p> */}
      </div>
    </div>
  );
};

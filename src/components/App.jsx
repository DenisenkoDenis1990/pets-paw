import { Routes, Route, useParams } from 'react-router-dom';
import { Layout } from './Layout';
import { Voting } from 'pages/Voting';
import { Breeds } from 'pages/Breeds';
import { Gallery } from 'pages/Gallery';
import { CatInfo } from 'pages/CatInfo';
export const App = () => {
  //let { catId } = useParams();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="voting" element={<Voting />} />
        <Route path="breeds" element={<Breeds />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="/:catId" element={<CatInfo />} />
        <Route path="likes" element={<div>Likes</div>} />
        <Route path="favourites" element={<div>Favourites</div>} />
        <Route path="dislikes" element={<div>Dislikes</div>} />
      </Route>
    </Routes>
  );
};

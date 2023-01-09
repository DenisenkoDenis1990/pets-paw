import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Voting } from 'pages/Voting';
import { Breeds } from 'pages/Breeds';
import { Gallery } from 'pages/Gallery';
import { CatInfo } from 'pages/CatInfo';
import { Favourites } from 'pages/Favourites';
import { Likes } from 'pages/Likes';
import { Dislikes } from 'pages/Dislikes';

export const App = () => {
  //let { catId } = useParams();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="voting" element={<Voting />} />
        <Route path="breeds" element={<Breeds />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="/:catId" element={<CatInfo />} />
        <Route path="likes" element={<Likes />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="dislikes" element={<Dislikes />} />
      </Route>
    </Routes>
  );
};

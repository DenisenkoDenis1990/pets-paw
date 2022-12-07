import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Voting } from 'pages/Voting';
import { Breeds } from 'pages/Breeds';
import { Gallery } from 'pages/Gallery';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="voting" element={<Voting />} />
        <Route
          path="breeds"
          element={
            <div>
              <Breeds />
            </div>
          }
        />
        <Route
          path="gallery"
          element={
            <div>
              <Gallery />
            </div>
          }
        />
        <Route path="likes" element={<div>Likes</div>} />
        <Route path="favourites" element={<div>Favourites</div>} />
        <Route path="dislikes" element={<div>Dislikes</div>} />
      </Route>
    </Routes>
  );
};

import { useEffect, useState } from 'react';
import { getVotes } from 'utils/catsApi';
export const Likes = () => {
  const [votes, setVotes] = useState([]);
  useEffect(() => {
    getVotes()
      .then(setVotes)
      .catch(err => console.log(err));
  }, []);

  const likes = votes.filter(like => {
    return like.value === 1;
  });
  return (
    <div>
      <h1>Likes</h1>
      <ul>
        {likes.map(like => {
          return (
            <li key={like.id}>
              <img src={like.image.url} alt={like.image.id}></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

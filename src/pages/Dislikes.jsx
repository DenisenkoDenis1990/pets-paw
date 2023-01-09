import { useEffect, useState } from 'react';
import { getVotes } from 'utils/catsApi';
export const Dislikes = () => {
  const [votes, setVotes] = useState([]);
  useEffect(() => {
    getVotes()
      .then(setVotes)
      .catch(err => console.log(err));
  }, []);

  const dislikes = votes.filter(dislike => {
    return dislike.value === -1;
  });
  return (
    <div>
      <h1>Dislikes</h1>
      <ul>
        {dislikes.map(dislike => {
          return (
            <li key={dislike.id}>
              <img src={dislike.image.url} alt={dislike.image.id}></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

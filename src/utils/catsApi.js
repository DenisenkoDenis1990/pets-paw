import axios from 'axios';

const API_KEY =
  'live_JI9bzgfAXUVWxA1Ohz5DgQ5mYNithMLHuQNeXDdNGrBYMbWbxGyUyB8MmJycKIJX';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

export const getRandomCat = async () => {
  const response = await axios.get(`/images/search?api_key=${API_KEY}`);
  return response.data[0];
};

export const addCatToLikes = async catId => {
  await axios.post(`/votes?api_key=${API_KEY}`, {
    image_id: catId,
    sub_id: API_KEY,
    value: 1,
  });
};
export const addCatToDislikes = async catId => {
  await axios.post(`/votes?api_key=${API_KEY}`, {
    image_id: catId,
    sub_id: API_KEY,
    value: -1,
  });
};

export const addCatToFavourites = async catId => {
  await axios.post(`/favourites?api_key=${API_KEY}`, {
    image_id: catId,
    sub_id: API_KEY
  });
};

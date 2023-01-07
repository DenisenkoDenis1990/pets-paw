import axios from 'axios';

const API_KEY =
  'live_JI9bzgfAXUVWxA1Ohz5DgQ5mYNithMLHuQNeXDdNGrBYMbWbxGyUyB8MmJycKIJX';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

export const getRandomCat = async limit => {
  const response = await axios.get(`/images/search?api_key=${API_KEY}`, {
    params: {
      has_breeds: 1,
      limit: limit,
    },
  });

  return limit > 1 ? response.data : response.data[0];
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
    sub_id: API_KEY,
  });
};

export const getBreeds = async limit => {
  const response = await axios.get(`/breeds?api_key=${API_KEY}?`, {
    params: {
      limit: limit,
    },
  });
  return response.data;
};

export const getImagesForGallery = async (limit, cat, order) => {
  const response = await axios.get(`/images/search?api_key=${API_KEY}?`, {
    params: {
      limit: limit,
      breed_ids: cat,
      order: order,
    },
  });
  return response.data;
};

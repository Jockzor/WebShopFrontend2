import axios from 'axios';

const baseURL = 'http://localhost:1337/api'; 

const api = axios.create({
  baseURL,
});


const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};


setAuthToken('15c40308160488fe98169f3e1cbcd72ccfee40c1c305947a609a7b0536fed21146eb44aaa9c900949a1e33f051d13029ced5138fdc6f70bd6cee36878e0c4b0bba38e24694eaccdaf75ff72734d9d172a6879c3eb507dee5893242c0ead2077b809385999b2e080a8ac21c34a8cb37a84f13f1c0393536e81219543d9da88bf3');

export const fetchProductsByCategory = async (category) => {
  try {
    const response = await api.get(`/products/4`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

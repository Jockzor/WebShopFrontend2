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

const token1 = '15c40308160488fe98169f3e1cbcd72ccfee40c1c305947a609a7b0536fed21146eb44aaa9c900949a1e33f051d13029ced5138fdc6f70bd6cee36878e0c4b0bba38e24694eaccdaf75ff72734d9d172a6879c3eb507dee5893242c0ead2077b809385999b2e080a8ac21c34a8cb37a84f13f1c0393536e81219543d9da88bf3';
const token2 = '0887eab43f58ae36994553a002b01f96a12be26d349d8ad05ee4956f407524d4cc45d1b886d36d58a2778f986b17acf3fd8c621014b9559409f61bb58a72e8343852681071c1c40deb9a27e0134c3e3e7cfdd499368c4426012006167aea167235d540b4650808df4962a948825b845820d9a67b5d94644a139c9aed9de632f8';
setAuthToken('0887eab43f58ae36994553a002b01f96a12be26d349d8ad05ee4956f407524d4cc45d1b886d36d58a2778f986b17acf3fd8c621014b9559409f61bb58a72e8343852681071c1c40deb9a27e0134c3e3e7cfdd499368c4426012006167aea167235d540b4650808df4962a948825b845820d9a67b5d94644a139c9aed9de632f8');

export const fetchProductsByCategory = async (categoryId) => {
  try {
    const response = await api.get(`/products?populate=*`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
export const fetchProductById = async (productId) => {
  try {
    const response = await api.get(`/products/${productId}?populate=*`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
};
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://product-crud-backend-iv6c.onrender.com/api', // URL del backend en Render
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

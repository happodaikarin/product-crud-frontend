import axios from 'axios';

const api = axios.create({
  baseURL: window.location.hostname === 'localhost'
    ? 'http://localhost:8080/api' // URL local si estás en localhost
    : 'https://product-crud-backend-iv6c.onrender.com/api', // URL en producción
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

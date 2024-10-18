import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Usar localhost en lugar de productapi
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

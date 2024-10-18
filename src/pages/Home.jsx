// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">Bienvenido a la API de Productos</h1>
        <p className="text-gray-700 mb-6">Gestiona tus productos de manera eficiente y sencilla.</p>
        <Link
          to="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Ver Productos
        </Link>
      </div>
    </div>
  );
};

export default Home;
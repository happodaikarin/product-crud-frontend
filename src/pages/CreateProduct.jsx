// src/pages/CreateProduct.jsx

import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleCreate = async (data) => {
    try {
      await api.post('/products', data);
      navigate('/products');
    } catch (err) {
      setError('Error al crear el producto.');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center py-10">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Crear Nuevo Producto</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <ProductForm onSubmit={handleCreate} />
      </div>
    </div>
  );
};

export default CreateProduct;

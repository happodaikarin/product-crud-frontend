// src/pages/EditProduct.jsx

import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import api from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);
  const [error, setError] = useState('');

  const fetchProduct = async () => {
    try {
      const response = await api.get(`/products/${id}`);
      setInitialData(response.data.data);
    } catch (err) {
      setError('Error al obtener los detalles del producto.');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const handleUpdate = async (data) => {
    try {
      await api.put(`/products/${id}`, data);
      navigate('/products');
    } catch (err) {
      setError('Error al actualizar el producto.');
      console.error(err);
    }
  };

  if (error)
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );

  if (!initialData)
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-700">Cargando...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center py-10">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Editar Producto</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <ProductForm onSubmit={handleUpdate} initialData={initialData} />
      </div>
    </div>
  );
};

export default EditProduct;

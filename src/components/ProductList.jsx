// src/components/ProductList.jsx

import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  const fetchProducts = async () => {
    try {
      const response = await api.get('/products');
      setProducts(response.data);
    } catch (err) {
      setError('Error al obtener los productos.');
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este producto?')) return;

    try {
      await api.delete(`/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (err) {
      setError('Error al eliminar el producto.');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Listado de Productos</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="py-3 px-6 bg-blue-600 text-left text-xs font-medium text-white uppercase tracking-wider">
                  ID
                </th>
                <th className="py-3 px-6 bg-blue-600 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Nombre
                </th>
                <th className="py-3 px-6 bg-blue-600 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Precio
                </th>
                <th className="py-3 px-6 bg-blue-600 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Categoría
                </th>
                <th className="py-3 px-6 bg-blue-600 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {products.map(product => (
                <tr key={product.id} className="hover:bg-gray-200 transition duration-200">
                  <td className="py-4 px-6 border-b">{product.id}</td>
                  <td className="py-4 px-6 border-b">{product.name}</td>
                  <td className="py-4 px-6 border-b">${product.price}</td>
                  <td className="py-4 px-6 border-b">{product.category}</td>
                  <td className="py-4 px-6 border-b space-x-2">
                    <Link
                      to={`/products/${product.id}`}
                      className="text-blue-500 hover:underline"
                    >
                      Ver
                    </Link>
                    <Link
                      to={`/edit/${product.id}`}
                      className="text-green-500 hover:underline"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-500 hover:underline"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan="5" className="py-4 px-6 text-center">
                    No hay productos disponibles.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  const fetchProduct = async () => {
    try {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data.data);
    } catch (err) {
      setError('Error al obtener los detalles del producto.');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (error)
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );

  if (!product)
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-700">Cargando...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <Link to="/products" className="text-blue-500 hover:underline mb-4 inline-block">
          ← Volver al Listado
        </Link>
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row">
          {product.imageUrl && (
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full md:w-1/3 h-64 object-cover rounded-lg mb-6 md:mb-0 md:mr-6"
            />
          )}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">{product.name}</h2>
            <p className="text-gray-700 mb-2"><strong>Precio:</strong> ${product.price}</p>
            <p className="text-gray-700 mb-2"><strong>Categoría:</strong> {product.category}</p>
            <p className="text-gray-700 mb-2"><strong>Stock:</strong> {product.stock}</p>
            <p className="text-gray-700 mb-2"><strong>Descripción:</strong> {product.description}</p>
            <p className="text-gray-700 mb-2"><strong>Creado el:</strong> {new Date(product.createdAt).toLocaleString()}</p>
            {product.updatedAt && (
              <p className="text-gray-700 mb-2"><strong>Actualizado el:</strong> {new Date(product.updatedAt).toLocaleString()}</p>
            )}
            <div className="mt-6 space-x-4">
              <Link
                to={`/edit/${product.id}`}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Editar Producto
              </Link>
              {/* Puedes agregar otros botones si es necesario */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

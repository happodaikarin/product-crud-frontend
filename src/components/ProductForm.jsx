// src/components/ProductForm.jsx

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import api from '../services/api';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('El nombre es obligatorio'),
  price: yup
    .number()
    .typeError('El precio debe ser un número')
    .positive('El precio debe ser positivo')
    .required('El precio es obligatorio'),
  description: yup.string().required('La descripción es obligatoria'),
  category: yup.string().required('La categoría es obligatoria'),
  stock: yup
    .number()
    .typeError('El stock debe ser un número')
    .integer('El stock debe ser un número entero')
    .min(0, 'El stock no puede ser negativo')
    .required('El stock es obligatorio'),
  imageUrl: yup.string().url('Debe ser una URL válida').optional(),
});

const ProductForm = ({ onSubmit, initialData }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialData || {
      name: '',
      price: '',
      description: '',
      category: '',
      stock: '',
      imageUrl: '',
    },
  });

  useEffect(() => {
    reset(initialData);
  }, [initialData, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Nombre */}
      <div>
        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Nombre</label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
          }`}
          placeholder="Ingresa el nombre del producto"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      {/* Precio */}
      <div>
        <label htmlFor="price" className="block text-gray-700 font-medium mb-1">Precio</label>
        <input
          id="price"
          type="number"
          step="0.01"
          {...register('price')}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.price ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
          }`}
          placeholder="Ingresa el precio del producto"
        />
        {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
      </div>

      {/* Descripción */}
      <div>
        <label htmlFor="description" className="block text-gray-700 font-medium mb-1">Descripción</label>
        <textarea
          id="description"
          {...register('description')}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.description ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
          }`}
          placeholder="Ingresa la descripción del producto"
          rows="4"
        ></textarea>
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
      </div>

      {/* Categoría */}
      <div>
        <label htmlFor="category" className="block text-gray-700 font-medium mb-1">Categoría</label>
        <input
          id="category"
          type="text"
          {...register('category')}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.category ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
          }`}
          placeholder="Ingresa la categoría del producto"
        />
        {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
      </div>

      {/* Stock */}
      <div>
        <label htmlFor="stock" className="block text-gray-700 font-medium mb-1">Stock</label>
        <input
          id="stock"
          type="number"
          {...register('stock')}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.stock ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
          }`}
          placeholder="Ingresa la cantidad en stock"
        />
        {errors.stock && <p className="text-red-500 text-sm mt-1">{errors.stock.message}</p>}
      </div>

      {/* URL de Imagen */}
      <div>
        <label htmlFor="imageUrl" className="block text-gray-700 font-medium mb-1">URL de Imagen</label>
        <input
          id="imageUrl"
          type="text"
          {...register('imageUrl')}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.imageUrl ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
          }`}
          placeholder="Ingresa la URL de la imagen del producto (opcional)"
        />
        {errors.imageUrl && <p className="text-red-500 text-sm mt-1">{errors.imageUrl.message}</p>}
      </div>

      {/* Botón de Envío */}
      <div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          {initialData ? 'Actualizar Producto' : 'Crear Producto'}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;

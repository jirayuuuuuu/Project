import React from 'react'
import Layout from './../Template/Layout';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams ();
  return (
    <Layout>
        <h1 className="text-5xl font-bold">ProductDetail</h1>
        <p>ID:{id} </p>

    </Layout>
  )
}

export default ProductDetail
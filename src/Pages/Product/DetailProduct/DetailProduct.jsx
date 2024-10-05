import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import DetailProductView from "./DetailProductView";

const DetailProduct = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

const fetchDetailProduct = async () => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setDetail(response.data);
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
};

useEffect(() => {
    fetchDetailProduct();
}, [id]);

return (
    <DetailProductView
        detail={detail}
        loading={loading}
        error={error}
    />
);

};

export default DetailProduct;
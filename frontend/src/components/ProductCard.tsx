import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

interface ProductProps {
    product: {
        productId: number;
        name: string;
        price: number;
        description: string;
        stock: number;
        imagePath: string;
        reviews: { rating: number; description: string }[];
    };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    const authenticated = authContext?.authenticated ?? false;

    const handleOrder = () => {
        if (authenticated) {
            navigate("/Checkout");
        } else {
            navigate("/login");
        }
    };

    const mostRecentReview = product.reviews[product.reviews.length - 1];
    let totalRating = 0;
    if (product.reviews.length > 0) {
        totalRating = product.reviews.reduce((acc, review) => acc + review.rating, 0);
        totalRating /= product.reviews.length;
    }

    return (
        <div className="flex flex-col w-[500px] p-3">
            <img src={product.imagePath} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <p>Stock: {product.stock}</p>
            {mostRecentReview && (
                <div>
                    <p>Most Recent Review: {mostRecentReview.description}</p>
                    <p>Average Rating: {totalRating.toFixed(2)}</p>
                </div>
            )}
            {product.stock > 0 && authenticated && (
                <button className="border mx-auto border-slate-900 p-1 hover:text-blue-500 hover:scale-105" onClick={handleOrder}>
                    Order
                </button>
            )}
            {product.stock === 0 && (
                <p className="text-center">Out of stock</p>
            )}
            {!authenticated && (
                <p>Please <a href="/login" className="text-blue-300">login</a> to place an order.</p>
            )}
        </div>
    );
}

export default ProductCard;
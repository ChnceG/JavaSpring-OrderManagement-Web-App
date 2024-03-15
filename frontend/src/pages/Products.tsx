/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import useAxios from 'axios-hooks';
import { AsyncWrapper } from '../components/AsyncWrapper';
import InfoBox from '../components/InfoBox';
import ProductCard from '../components/ProductCard';

export default function Products(): JSX.Element {
    const [selectedCategory, setSelectedCategory] = useState('');

    const [{ data: products, loading, error }, refetch] = useAxios(`/api/products/all?typeId=${selectedCategory}`);

    const handleCategoryChange = (categoryId: string) => {
        setSelectedCategory(categoryId);
        refetch();
    };

    return (
        <AsyncWrapper requests={[{ loading, error }]}>
            <div className="">
                <h1 className="text-2xl text-center">Products</h1>
                <div className="flex justify-center my-4 gap-3">
                    <button onClick={() => handleCategoryChange('')} className="border border-slate-900 p-1 hover:text-blue-500 hover:scale-105">All Products</button>
                    <button onClick={() => handleCategoryChange('1')} className="border border-slate-900 p-1 hover:text-blue-500 hover:scale-105">Animals</button>
                    <button onClick={() => handleCategoryChange('2')} className="border border-slate-900 p-1 hover:text-blue-500 hover:scale-105">Utensils</button>
                    <button onClick={() => handleCategoryChange('3')} className="border border-slate-900 p-1 hover:text-blue-500 hover:scale-105">Vehicles</button>
                </div>
                <div className="flex justify-evenly">
                    <ul className="flex gap-4">
                        {products?.map((product: any) => (
                            <InfoBox key={product.productId} className="flex">
                                <ProductCard product={product} />
                            </InfoBox>
                        ))}
                    </ul>
                </div>
            </div>
        </AsyncWrapper>
    );
}
import React, { useState, useContext, useEffect }  from 'react'
import { useParams } from 'react-router-dom'
import ProductContext from '../contexts/products/ProductContext'
import ProductDetails from '../components/product/ProductDetails';

export default function ProductPage() {

    const { productId } = useParams(); 
    const [ product, setProduct ] = useState({});
    const context = useContext(ProductContext);

    useEffect(() => {
        const fetchProduct = () => {
            let selectedProduct = context.getProductByID(productId);  
            setProduct(selectedProduct);
        }
        fetchProduct();
    }) // [productId])

    return (
        <React.Fragment>

            {product ?
                <React.Fragment>
                    <ProductDetails product={product} />
                </React.Fragment>
            : null} 

        </React.Fragment>
    )

}

import React, { useState, useContext, useEffect }  from 'react'
import { useParams } from 'react-router-dom'
import ProductContext from '../contexts/products/ProductContext'
import ProductDetails from '../components/product/ProductDetails';

export default function ProductPage() {

    const { productId } = useParams(); 
    const [ product, setProduct ] = useState({});
    const context = useContext(ProductContext);

    useEffect(() => {
        const fetchProduct = (id) => {
            let selectedProduct = context.getProductByID(id);
            console.log(selectedProduct)
            setProduct(selectedProduct);
        }
        fetchProduct(productId);
    }, [context, productId])

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

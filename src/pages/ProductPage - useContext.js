import React from 'react'
// import { useParams } from 'react-router-dom'
// import ProductContext from "./ProductContext";
import ProductDetails from '../components/product/ProductDetails';

export default function ProductPage() {

    // let pageParams = useParams(); 
    // console.log(pageParams)

    // const { productId } = useParams(); 
    // const [ product, setProduct ] = useState({});
    // const context = useContext(ProductContext);

    // useEffect(() => {
    //     const fetchProduct = () => {
    //         let selectedProduct = context.getProductByID(productId);  
    //         setProduct(selectedProduct);
    //     }
    //     fetchProduct();
    // })
    // // [productId])

    return (
        <React.Fragment>

            {/* {product ? */}
                <React.Fragment>
                    <ProductDetails/>
                </React.Fragment>
            {/* : null} */}

        </React.Fragment>
    )

}

import React, {useContext} from 'react';
import ProductContext from '../../contexts/products/ProductContext';
import { Link } from 'react-router-dom';

// import ProductPage from '../../pages/ProductPage'

export default function CardListing(){

    let context = useContext(ProductContext);

    return (
        <React.Fragment>
            {/* card */}
            <div className="row ms-3 ms-lg-1 mt-4">
                {
                    context.getProducts().map( (p)=>{
                        return (

                            <div className="col mb-3">
                                <Link to={"/product/" + p.id} className="no-underline">
                                    <div className="card listing-card" key={p.id}>
                                        <img src={p.product_image_1}
                                        // ref: https://stackoverflow.com/questions/48703510/change-image-on-hover-in-jsx
                                        onMouseOver={e => (e.currentTarget.src = p.product_image_2)} 
                                        onMouseOut={e => (e.currentTarget.src = p.product_image_1)} 
                                        className="card-img-top card-img-container" alt={p.name}/>
                                        <div className="card-body">
                                            <h5>{p.designer.name}</h5>
                                            <p className="card-text card-name-height">{p.name}</p>
                                            <div className="fw-bold">S${p.selling_price}</div>
                                            <div className="fw-light fst-italic">Est. Retail <span>S${p.retail_price}</span></div>
                                        </div>
                                    </div>
                                </Link> 
                            </div>          
                        )
                    })
                }
            
            </div>

        </React.Fragment>
    )
}
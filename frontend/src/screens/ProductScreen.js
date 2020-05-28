import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductScreen (props) {

    var [id, setId] = useState(0);
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();


    console.log( "Passa aqui porra" );
    

    useEffect( () => {
        id = props.match.params.id;
        dispatch( detailsProduct(id));
        return () => {
            //
        };
    },[id])



    return <div>   
        <div className="back-to-result">
            <Link to="/"> Back to Result</Link>
        </div>  
        {loading ? <div>Loading...</div> :
        error ? <div>{error}</div> :
        (
        <div className="details">
            <div className="details-image"> 
                <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4> {product.name} </h4>
                    </li>
                    <li> 
                        {product.rating} Stars ({product.numReviews} Reviews)
                    </li>
                    <li> 
                    <b> {product.price}</b>
                    </li> 
                    <li>
                        Description:
                        <div>
                            {product.description}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                    <ul>
                        <li>
                            Price: {product.price}
                        </li>
                        <li>
                            Status: {product.status}
                        </li>
                        <li>
                            Qty: <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </li> 
                        <li>
                            <button>Add do Cart</button>
                        </li>                               
                    </ul>
                </div>
        </div>)}


    </div>  
}

export default ProductScreen;
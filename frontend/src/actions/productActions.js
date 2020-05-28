import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL } from "../constants/productConstants"
import axios from 'axios';
var fs = require('fs');


const detailsProduct = (productId) => async (dispatch) =>  {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
      var { data } = await axios.get("/api/products/" + productId);
       if (data) console.log(data)
       dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
      

    } catch (error) {
      dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  
    }
  }
  

const listProducts = () => async (dispatch) => {
  try {

    dispatch({ type: PRODUCT_LIST_REQUEST });
    var { data } = await axios.get("/api/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  }
  catch (error) {

    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
}


export { listProducts, detailsProduct }
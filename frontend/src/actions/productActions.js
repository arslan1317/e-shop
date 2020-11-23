import {PRODUCT_LIST_FAIL, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_REQUEST, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL} from '../constants/productConstants';
import axios from 'axios';

export const listProduct = () => async (dispath) => {
  try {
    dispath({ type: PRODUCT_LIST_REQUEST });
    const {data}  = await axios.get('/api/products');
    dispath({type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch(error) {
    dispath({type: PRODUCT_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message})
  }
}

export const listProductDetails = (id) => async (dispath) => {
  try {
    dispath({ type: PRODUCT_DETAILS_REQUEST });
    const {data}  = await axios.get(`/api/products/${id}`);
    dispath({type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch(error) {
    dispath({type: PRODUCT_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message})
  }
}
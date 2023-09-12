import axios from 'axios';
import { addtowishlistroute, getallproductsroute, getproductroute } from '../apiroutes';


const getAllProducts = async () => {
    const response = await axios.get(getallproductsroute);
    if (response.data) {
        return response.data;
        console.log(response.data);
    }
};



const getProduct = async (id) => {
    const response = await axios.get(`${getproductroute}/${id}`);
    if (response.data) {
        return response.data;
    }
};

const addToWishlist = async (productId) => {
    const response = await axios.put(addtowishlistroute, { productId });
    if (response.data) {
        return response.data;
    }
};

export const productService = {
    getAllProducts,
    getProduct,
    addToWishlist,
};

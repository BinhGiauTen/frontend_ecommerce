import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const getProducts = async (user) => {
    const response = await axios.get(`${base_url}product`);
    return response.data;
  };

const addToWishList = async(prodId) =>{
  const response = await axios.put(`${base_url}product/wishlist`,{prodId}, config);
  return response.data;
}

const productService = {
    getProducts,
    addToWishList
};
export default productService;

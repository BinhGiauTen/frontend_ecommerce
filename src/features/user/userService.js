import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";


const register = async (user) => {
  const response = await axios.post(`${base_url}user/register`, user);
  return response.data;
};

const login = async (user) => {
    const response = await axios.post(`${base_url}user/login`, user);
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  };

const getUserWishlist = async () => {
    const response = await axios.get(`${base_url}user/wishlist`, config);
    return response.data;
};


const userService = {
    register,
    login,
    getUserWishlist
};
export default userService;

import axios from "axios";
import { base_url } from "../../utils/base_url";

const getBlogs = async () => {
  const response = await axios.get(`${base_url}blog`);
  return response.data;
};

const getaBlog = async (id) => {
  const response = await axios.get(`${base_url}blog/${id}`);
  return response.data;
};

const blogService = {
  getBlogs,
  getaBlog
};
export default blogService;

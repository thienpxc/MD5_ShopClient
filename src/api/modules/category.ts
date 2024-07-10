import { Category } from "@/store/slices/category.slices";
import axios from "axios";

export const categoryApi = {
  findAllCategories: async () => {
    return await axios.get(`${import.meta.env.VITE_SV}/categories`);
  },
  async addCategories(data: Category) {
    return await axios.post(`${import.meta.env.VITE_SV}/categories`, data);
  },
};

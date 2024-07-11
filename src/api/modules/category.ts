import { Category } from "@/store/slices/category.slices";
import axios from "axios";

export const categoryApi = {
  findAllCategories: async () => {
    return await axios.get(`${import.meta.env.VITE_SV}/categories`);
  },
  async addCategories(data: Category) {
    console.log("data", data);
    return await axios.post(`${import.meta.env.VITE_SV}/categories`, data);
  },
  async getCategoriesID(id: number) {
    return await axios.get(`${import.meta.env.VITE_SV}/categories/${id}`);
  },
  async deleteCategories(id: number) {
    return await axios.delete(`${import.meta.env.VITE_SV}/categories/${id}`);
  },
  async updateCategories(data: Category) {
    return await axios.post(
      `${import.meta.env.VITE_SV}/categories/update`,
      data
    );
  },
  async paginationCategory(offset: number, limit: number) {
    return await axios.get(
      `${
        import.meta.env.VITE_SV
      }/categories/pagination?offset=${offset}&limit=${limit}`
    );
  },

  async searchCategory(name: string) {
    return await axios.get(
      `${import.meta.env.VITE_SV}/categories/search?name=${name}`
    );
  },
};

import axios from "axios";
export const handleCategoryBasedFilter = async (value) => {
  const response = await axios.post(
    `${import.meta.env.VITE_APP_DOMAIN}/admin/product/filter`,
    { value }
  );
  return response.data;
};

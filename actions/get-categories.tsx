import { Category } from "@/types";
import axios from "axios";

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;
const getCategories = async (): Promise<Category[]> => {
  const res = await axios.get(url);
  console.log("res", res);
  return res.data;
};

export default getCategories;

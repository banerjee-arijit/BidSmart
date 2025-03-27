import { create } from "zustand";
import { dataBase } from "@/lib/appwrite";

const useProductStore = create((set) => ({
  products: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true, error: null });

    try {
      const response = await dataBase.listDocuments(
        "67e42ee3003893df6ebc",
        "67e42f15000bb09c9d83"
      );
      set({ products: response.documents, loading: false });
    } catch (err) {
      console.log("Error fetching products", err);
      set({ error: err.message, loading: false });
    }
  },
}));

export default useProductStore;

// /helper/getHighestBidder.js
import { dataBase } from "@/lib/appwrite";
import { Query } from "appwrite";

export const fetchGetHighestBid = async (productId) => {
  try {
    const response = await dataBase.listDocuments(
      "67e42ee3003893df6ebc", // your DB ID
      "67e5580d000494cb0aa2", // your collection ID
      [Query.equal("productId", productId)]
    );
    return response.documents;
  } catch (error) {
    console.error("Error fetching highest bid:", error);
    return [];
  }
};

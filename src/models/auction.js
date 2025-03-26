// src/models/auction.js
import { dataBase, storage, ID, account } from "@/lib/appwrite";

const BUCKET_ID = "67e4311200238b5e6160";
const DB_ID = "67e42ee3003893df6ebc";
const COLLECTION_ID = "67e42f15000bb09c9d83";

export const createAuction = async (formData, images) => {
  try {
    const user = await account.get();
    const userId = user.$id;

    const uploadedImageIds = [];
    for (const image of images) {
      const uploaded = await storage.createFile(BUCKET_ID, ID.unique(), image);
      uploadedImageIds.push(uploaded.$id);
    }

    const document = await dataBase.createDocument(
      DB_ID,
      COLLECTION_ID,
      ID.unique(),
      {
        userId,
        productName: formData.productName,
        description: formData.description,
        initialPrice: Number(formData.initialPrice),
        endDate: formData.endDate,
        imageIds: uploadedImageIds,
      }
    );

    return { success: true, document };
  } catch (error) {
    console.error("Auction creation error:", error);
    throw new Error("Auction creation failed");
  }
};

import { dataBase, ID } from "@/lib/appwrite";
import { Query } from "appwrite";

export const saveHigestBidder = async ({
  productId,
  userId,
  username,
  amount,
}) => {
  try {
    const existing = await dataBase.listDocuments(
      "67e42ee3003893df6ebc",
      "67e5580d000494cb0aa2",
      [Query.equal("productId", productId), Query.equal("userId", userId)]
    );

    if (existing.total > 0) {
      // 2. Update existing document
      const docId = existing.documents[0].$id;
      const updated = await dataBase.updateDocument(
        "67e42ee3003893df6ebc",
        "67e5580d000494cb0aa2",
        docId,
        {
          amount,
          timestamp: new Date().toISOString(),
        }
      );
      console.log("Bid updated:", updated);
    } else {
      // 3. Create new document
      const created = await dataBase.createDocument(
        "67e42ee3003893df6ebc",
        "67e5580d000494cb0aa2",
        ID.unique(),
        {
          productId,
          userId,
          username,
          amount,
          timestamp: new Date().toISOString(),
        }
      );
      console.log("New highest bid saved:", created);
    }
  } catch (err) {
    console.error("Error saving/updating highest bidder:", err);
  }
};

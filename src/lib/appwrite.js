import {
  Client,
  Account,
  ID,
  OAuthProvider,
  Databases,
  Storage,
} from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67e17320001348917dbe");

const account = new Account(client);
const dataBase = new Databases(client);
const storage = new Storage(client);

export { client, account, ID, OAuthProvider, dataBase, storage };

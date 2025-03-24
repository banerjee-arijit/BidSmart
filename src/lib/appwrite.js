import { Client, Account, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67e12594002c21ae3cef");

const account = new Account(client);

export { client, account, ID };

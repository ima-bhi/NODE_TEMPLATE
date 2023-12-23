import mongoose, { ConnectOptions } from "mongoose";
import { Db } from "mongodb";

export default async (databaseURL: string): Promise<Db> => {
  // Prepare for the 'strictQuery' change in Mongoose 7
  mongoose.set("strictQuery", false);
  const connection = await mongoose.connect(databaseURL, {
    // @ts-ignore
    useUnifiedTopology: true,
    useNewUrlParser: true,
  } as ConnectOptions);
  mongoose.set("debug", true);
  return connection.connection.db as Db;
};

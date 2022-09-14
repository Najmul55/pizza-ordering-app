import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  throw new Error(
    "Please define the MONGO_URL environment variable inside .env.local"
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  mongoose
    .connect(MONGO_URL)
    .then(() => {
      "i am running";
    })
    .catch((err) => console.log(err));
}

export default dbConnect;

// old id
// mongodb+srv://najmul:957123a1!@cluster0.tz2frry.mongodb.net/pizza?retryWrites=true&w=majority

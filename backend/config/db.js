import mongoose from "mongoose";


// HERE WE MAKE A FUNCTION TO CONNECT MONGO_db DATABASE SEPERATELY
export const connection =async (url) => {
  try {
   await mongoose.connect(`${url}`);
    console.log(`database connected👋...`);
  } catch (err) {
    console.log(`Error occurs during the database connection setup ${err}`);
  }
};

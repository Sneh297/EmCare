import mongoose from 'mongoose';

async function connectdb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connect to DataBase');
  } catch (error) {
    console.log('Mongo DB error', error);
  }
}
export default connectdb;

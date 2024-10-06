import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  businessname: { type: String, required: true },
  groupid: { type: String, required: true },
  password: { type: String, required: true },
});

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;

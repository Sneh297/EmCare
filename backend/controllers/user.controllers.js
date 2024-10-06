import Customer from '../models/customer.models.js';
import { sendErrorResponse } from '../utils/responseUtils.js';
import jwt from 'jsonwebtoken';
export const Signin = async (req, res) => {
  const { groupid, password } = req.body;

  if (!groupid || !password) {
    return sendErrorResponse(res, 401, 'Credential Missing');
  }

  const user = await Customer.findOne({
    groupid,
    password,
  });

  if (!user) return sendErrorResponse(res, 401, 'User Not Registered');

  const token = jwt.sign({ user }, process.env.JWT_SECRET);

  return res.cookie('token', token, { httpOnly: true }).status(200).json({
    message: 'Login successful',
    success: true,
  });
};

import * as mongoose from 'mongoose';

export const MutationSchema = new mongoose.Schema({
  mutation: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  }
});

import { Timestamp } from 'bson';
import mogoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      lowecase: true,
      unique: rue,
    },
    password: {
      type: String,
      required: True,
    },
  },
  { Timestamps: true }
);

export const User = mongoose.model('User', userSchema);

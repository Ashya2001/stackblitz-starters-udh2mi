import mongoose from 'mongoose';

const cotegorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Cotegory = mongoose.model('Cotegory', cotegorySchema);

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    role: { type: String, enum: ['charter', 'ship_owner', 'admin'], default: 'charter' },
    email: { type: String, unique: true, required: true, lowercase: true, index: true },
    passwordHash: { type: String, required: true },
    name: { type: String },
    resetToken: { type: String },
    resetTokenExp: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);

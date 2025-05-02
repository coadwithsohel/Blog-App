import mongoose from 'mongoose';

export const ConnectDB = async () => {
    await mongoose.connect(
      "mongodb+srv://sohelkhansaab33:khan786116@cluster0.kv9giln.mongodb.net/blog-app"
    );
    console.log("MongoDB connected successfully");  
}

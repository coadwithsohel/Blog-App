import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/blogModel";
const { NextResponse } = require("next/server");
import { writeFile } from "fs/promises";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

// API endpoint to get all blogs
export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json({blog});
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({blogs});
  }
}

// API endpoint for uploading blogs
export async function POST(request) {
  const formData = await request.formData();
  const timestamp = Date.now();

  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imgUrl}`,
    authorImg: `${formData.get("authorImg")}`,
  };
  await BlogModel.create(blogData);
  console.log("Blog data saved to database:", blogData);

  return NextResponse.json({
    success: true,
    message: "Blog created successfully",
  });
}

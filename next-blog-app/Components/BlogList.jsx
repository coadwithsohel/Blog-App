import { blog_data, assets } from "@/Assets/assets";
import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";

const BlogList = () => {
  
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/api/blogs");
      const fetchedBlogs = response.data?.blogs;

      if (Array.isArray(fetchedBlogs)) {
        setBlogs(fetchedBlogs);
      } else {
        console.error("Invalid response format:", response.data);
        setBlogs([]); // fallback to empty array
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setBlogs([]); // fallback to empty array to avoid crash
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div>
      <div className="flex justify-center gap-6 my-10 ">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All" ? "bg-black text-white py-1 px-4 rounded-sm " : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={
            menu === "Technology"
              ? "bg-black text-white py-1 px-4 rounded-sm "
              : ""
          }
        >
          Technology
        </button>

        <button
          onClick={() => setMenu("Startup")}
          className={
            menu === "Startup"
              ? "bg-black text-white py-1 px-4 rounded-sm "
              : ""
          }
        >
          Startup
        </button>
        <button
          onClick={() => setMenu("Lifestyle")}
          className={
            menu === "Lifestyle"
              ? "bg-black text-white py-1 px-4 rounded-sm "
              : ""
          }
        >
          Lifestyle
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-4 gap-y-10 mb-16 xl:mx-24 ">
        {Array.isArray(blogs) &&
          blogs
            .filter((item) => (menu === "All" ? true : item.category === menu))
            .map((item) => (
              <BlogItem
                key={item._id}
                id={item._id}
                image={item.image}
                description={item.description}
                category={item.category}
                title={item.title}
              />
            ))}
      </div>
    </div>
  );
};

export default BlogList;

import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const BlogItem = ({title,description,category,image}) => {
  return (
    <div className=" max-w-[330px]  sm:mx-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0_#000000] ">
      <Image
        src={image}
        alt=""
        width={400}
        height={400}
        className=" border border-black"
      />
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 text-sm tracking-tight to-gray-700">
          {description}
              </p>
              <div className=" inline-flex items-center py-2 font-semibold text-center">
                  Read More <Image src={assets.arrow} className="ml-2" alt=""/>
              </div>
      </div>
    </div>
  );
};

export default BlogItem;

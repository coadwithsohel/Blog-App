import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const BlogItem = ({ title, description, category, image, id }) => {
  return (
    <div className=" max-w-[330px]  sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0_#000000] ">
      <Link href={`/blog/${id}`}>
        <Image
          src={image}
          alt=""
          width={400}
          height={400}
          className=" border border-black"
        />
      </Link>

      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 text-sm tracking-tight to-gray-700"
        dangerouslySetInnerHTML={{__html:description.slice(0,120)}}
        ></p>

        <Link
          href={`/blog/${id}`}
          className=" inline-flex items-center py-2 font-semibold text-center bg-black text-white px-4 rounded-sm hover:bg-white hover:text-black border border-black transition duration-300 ease-in-out"
        >
          Read More
          <Image src={assets.arrow} className="ml-2" alt="arrow" width={20} />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;

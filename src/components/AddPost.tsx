import Image from "next/image";
import React from "react";

const AddPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image
        src={"/story.png"}
        alt=""
        width={20}
        height={20}
        className="w-12 h-12 object-cover rounded-full "
      ></Image>
      {/* POST */}
      <div className="  flex-1 ">
        {/* TEXT-INPUT */}
        <div className="flex gap-x-4">
          <textarea
            placeholder="What's on your mind?"
            className="bg-slate-100 rounded-lg flex-1 p-2"
            name=""
            id=""
          ></textarea>
          <Image
            src={"/emoji.png"}
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
        {/* POST OPTIONS */}
        <div className=""></div>
      </div>
    </div>
  );
};

export default AddPost;

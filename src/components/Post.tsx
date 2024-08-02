import React from "react";
import Image from "next/image";

function Post() {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center  justify-between">
        <div className="flex item-center gap-4">
          <Image
            src={"/nature.png"}
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full ring-2"
          />
          <span className="font-medium">Elon Musk</span>
        </div>
        <Image src={"/more.png"} alt="" width={16} height={16} />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src={"/building.png"}
            alt=""
            fill
            className="object-contain rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          quas cum officia quae voluptas eaque odio eligendi, nisi, amet tenetur
          numquam. Fugit quo quod, accusantium exercitationem id harum quia?
          Deleniti aliquam magnam sed asperiores assumenda illo nemo laboriosam
          sint aut placeat, ipsam officiis tenetur ea eveniet facere quis
          maiores consequuntur.
        </p>
      </div>
      {/* INTERACTIONS */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex gap-8"></div>
        <div className="flex items-center gap-4 bg-slate-100 rounded-xl ">
          <Image
            src={"/like.png"}
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
          <span className="text-gray-300"> | </span>
          <span className="text-gray-500">
            {" "}
            123 <span className="text-gray-600 hidden md:inline">
              Likes
            </span>{" "}
          </span>
        </div>

        <div className="flex  gap-8"></div>
        <div className="flex items-center gap-4 bg-slate-100 rounded-xl ">
          <Image
            src={"/comment.png"}
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
          <span className="text-gray-300"> | </span>
          <span className="text-gray-500">
            {" "}
            123 <span className="text-gray-600 hidden md:inline">
              Comments
            </span>{" "}
          </span>
          <div className="">
            {" "}
            <div className="flex items-center gap-4 bg-slate-100 rounded-xl ">
              <Image
                src={"/shares.png"}
                alt=""
                width={16}
                height={16}
                className="cursor-pointer"
              />
              <span className="text-gray-300"> | </span>
              <span className="text-gray-500">
                {" "}
                123{" "}
                <span className="text-gray-600 hidden md:inline">
                  Share
                </span>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;

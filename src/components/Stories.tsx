import Image from "next/image";
import React from "react";

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide scrollbar-hide  ">
      <div className="flex gap-8  w-max">
        {/* <StoryList stories={stories} userId={currentUserId} />  */}
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
          // key={story.id}
        >
          <Image
            src={"/story.png"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">
            {/* {story.user.name || story.user.username} */}
            Sabeen
          </span>
        </div>
        {/* Dupes Starts */}
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
          // key={story.id}
        >
          <Image
            src={"/story.png"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">
            {/* {story.user.name || story.user.username} */}
            Sabeen
          </span>
        </div>
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
          // key={story.id}
        >
          <Image
            src={"/story.png"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">
            {/* {story.user.name || story.user.username} */}
            Sabeen
          </span>
        </div>
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
          // key={story.id}
        >
          <Image
            src={"/story.png"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">
            {/* {story.user.name || story.user.username} */}
            Sabeen
          </span>
        </div>
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
          // key={story.id}
        >
          <Image
            src={"/story.png"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">
            {/* {story.user.name || story.user.username} */}
            Sabeen
          </span>
        </div>
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
          // key={story.id}
        >
          <Image
            src={"/story.png"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">
            {/* {story.user.name || story.user.username} */}
            Sabeen
          </span>
        </div>
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
          // key={story.id}
        >
          <Image
            src={"/story.png"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">
            {/* {story.user.name || story.user.username} */}
            Sabeen
          </span>
        </div>
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
          // key={story.id}
        >
          <Image
            src={"/story.png"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">
            {/* {story.user.name || story.user.username} */}
            Sabeen
          </span>
        </div>
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
          // key={story.id}
        >
          <Image
            src={"/story.png"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">
            {/* {story.user.name || story.user.username} */}
            Sabeen
          </span>
        </div>
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
          // key={story.id}
        >
          <Image
            src={"/story.png"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">
            {/* {story.user.name || story.user.username} */}
            Sabeen
          </span>
        </div>
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
          // key={story.id}
        >
          <Image
            src={"/story.png"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">
            {/* {story.user.name || story.user.username} */}
            Sabeen
          </span>
        </div>
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
          // key={story.id}
        >
          <Image
            src={"/story.png"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">
            {/* {story.user.name || story.user.username} */}
            Sabeen
          </span>
        </div>
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
          // key={story.id}
        >
          <Image
            src={"/story.png"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">
            {/* {story.user.name || story.user.username} */}
            Sabeen
          </span>
        </div>
        {/* Dupes Ends */}
      </div>
    </div>
  );
};

export default Stories;

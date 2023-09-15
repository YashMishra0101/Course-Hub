import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({ course }) {
  const [heart, setHeart] = useState(true);
  const [seeMore, seeLess] = useState(true);

  function toggleSeeMore(){
    seeMore ? seeLess(false) : seeLess(true)
  }

  function like() {
    setHeart(false);
    toast.success("Liked 🤩");
  }

  function dislike() {
    setHeart(true);
    toast.error("Removed Liked 🥺");
  }

  return (
    <div className="w-[300px] p-2 mb-5 bg-opacity-80 rounded-md mx-auto overflow-hidden bg-indigo-950">
      <div className="relative">
        <img src={course.image.url} alt={course.image.alt} />
        <span className="absolute right-2 bottom-3 rounded-full flex justify-center items-center bg-blue-500 w-10">
          <button className="p-2">
            {heart ? (
              <FcLikePlaceholder className="like" onClick={like} />
            ) : (
              <FcLike className="like" onClick={dislike} />
            )}
          </button>
        </span>
      </div>

      <span className="text-white font-semibold text-lg leading-6">
        {course.title}
      </span>

      <p className="mt-2 mb-2 text-white">
        {seeMore
          ? course.description.substring(0, 110)
          : course.description}
        <button className="text-blue-500 ml-2 font-medium cursor-pointer"
          onClick={toggleSeeMore} >
          {seeMore ? "...see more" : "...see Less"}
        </button>

      </p>
    </div>
  );
}

export default Card;

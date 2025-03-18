import React, { useState } from "react"
import { CommentProps } from "../interfaces/componentInterfaces"
import { FaRegHeart, FaHeart } from "react-icons/fa6"

const Comment: React.FC<CommentProps> = ({ fullName, body, likes, image }) => {
  const [liked, setLiked] = useState(false)
  return (
    <div className="sm:max-w-[500px] max-w-[500px] w-full min-h-[160px] shadow hover:shadow-xl transition-all duration-500 my-5 flex items-center bg-[#F9F9F9] rounded-xl">
      <div className="h-full w-[130px] flex flex-col justify-center items-center p-6 gap-2">
        <img
          src={image}
          alt="profile-pic"
          className="h-[60px] w-[60px] rounded-[100px]"
        />
        <p className="text-[14px] w-min">{fullName}</p>
      </div>
      <div className="h-[106px] w-max flex flex-col justify-between">
        <div className="w-max">
          <p className="sm:w-[230px] w-[210px]">{body}</p>
        </div>
        <div className="w-max py-4">
          <div className="w-[70px] flex items-center">
            {liked ? (
              <FaHeart
                className="cursor-pointer"
                onClick={() => setLiked((prev) => !prev)}
                fontSize={20}
              />
            ) : (
              <FaRegHeart
                className="cursor-pointer"
                onClick={() => setLiked((prev) => !prev)}
                fontSize={20}
              />
            )}
            <p className="ml-2 text-neutral-700 font-semibold">
              {liked ? likes + 1 : likes}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment

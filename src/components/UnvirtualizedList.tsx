import React from "react"
import Comment from "./Comment"
import { UnvirtualizedListProps } from "../interfaces/componentInterfaces"

const UnvirtualizedList: React.FC<UnvirtualizedListProps> = ({
  commentsList,
}) => {
  return (
    <div className="flex flex-col sm:w-[720px] w-[340px]">
      {commentsList.map((comment) => (
        <Comment
          fullName={comment.user.fullName}
          likes={comment.likes}
          body={comment.body}
          key={comment.postId + comment.id + comment.user.id + Math.random()}
          image="https://picsum.photos/60"
        />
      ))}
    </div>
  )
}

export default UnvirtualizedList

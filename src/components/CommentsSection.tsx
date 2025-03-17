import { useQuery } from "@tanstack/react-query"
import React, { useEffect, useState } from "react"
import { getComments } from "../api/react-query/getComments"
import { IComment } from "../interfaces/apiInterfaces"
import Comment from "./Comment"
import Loading from "./Loading"
import { CommentsSectionProps } from "../interfaces/componentInterfaces"
import VirtualizedList from "./VirtualizedList"
import UnvirtualizedList from "./UnvirtualizedList"

const CommentsSection: React.FC<CommentsSectionProps> = ({
  enableVirtualizer,
}) => {
  const [limit] = React.useState(0)
  const [commentsList, setCommentsList] = useState<IComment[]>([])
  const { data, isPending, isError } = useQuery({
    queryKey: ["comments", limit],
    queryFn: () => getComments(limit),
  })
  if (isError) {
    window.alert("Error fetching")
  }

  useEffect(() => {
    if (!isError && !isPending) {
      setCommentsList(data?.comments as IComment[])
    }
  }, [isPending, isError, data])
  if (isPending) {
    return <Loading />
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[20px] py-4 sm:w-[720px] w-[340px]">Comments</h1>
      {enableVirtualizer ? (
        <VirtualizedList commentsList={commentsList} />
      ) : (
        <UnvirtualizedList commentsList={commentsList} />
      )}
    </div>
  )
}

export default CommentsSection

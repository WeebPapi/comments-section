import { useQuery } from "@tanstack/react-query"
import React, { useEffect, useState } from "react"
import { getComments } from "../api/react-query/getComments"
import { IComment } from "../interfaces/apiInterfaces"
import Loading from "./Loading"
import VirtualizedList from "./VirtualizedList"
import UnvirtualizedList from "./UnvirtualizedList"
import ToggleButton from "./ToggleButton"

const CommentsSection: React.FC = () => {
  const [limit] = React.useState(0)
  const [commentsList, setCommentsList] = useState<IComment[]>([])
  const [enableVirtualizer, setEnableVirtualizer] = useState(true)
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
    <div className="flex flex-col items-center sm:w-[80%] w-[90%] shadow-xl rounded-2xl bg-white">
      <div className="sm:w-[720px] w-[340px] flex justify-between items-center">
        <h1 className="text-[20px] py-8 sm:w-[720px] w-[340px]">Comments</h1>
        <ToggleButton
          enableVirtualizer={enableVirtualizer}
          setEnableVirtualizer={setEnableVirtualizer}
        />
      </div>
      {enableVirtualizer ? (
        <VirtualizedList commentsList={commentsList} />
      ) : (
        <UnvirtualizedList commentsList={commentsList} />
      )}
    </div>
  )
}

export default CommentsSection

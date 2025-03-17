import React, { useRef } from "react"
import { useVirtualizer } from "@tanstack/react-virtual"
import { VirtualizedListProps } from "../interfaces/componentInterfaces"
import Comment from "./Comment"

const VirtualizedList: React.FC<VirtualizedListProps> = ({ commentsList }) => {
  const parentRef = useRef(null)
  const virtualizer = useVirtualizer({
    count: 340,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 200,
  })
  return (
    <div
      ref={parentRef}
      className="overflow-auto no-scrollbar w-full h-[90dvh] flex justify-center"
    >
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          position: "relative",
        }}
        className="flex flex-col sm:w-[720px] w-[340px]"
      >
        {virtualizer.getVirtualItems().map((virtualItem) => {
          const item = commentsList[virtualItem.index]
          return (
            <div
              key={virtualItem.index}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              <Comment
                body={item.body}
                fullName={item.user.fullName}
                likes={item.likes}
                image="https://picsum.photos/60"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default VirtualizedList

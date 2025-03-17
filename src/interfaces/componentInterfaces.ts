import { IComment } from "./apiInterfaces"

export interface DummyVideoProps {
  src: string
}
export interface CommentProps {
  fullName: string
  body: string
  likes: number
  image: string
}
export interface CommentsSectionProps {
  enableVirtualizer: boolean
}
export interface UnvirtualizedListProps {
  commentsList: IComment[]
}
export interface VirtualizedListProps {
  commentsList: IComment[]
}

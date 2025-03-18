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
export interface UnvirtualizedListProps {
  commentsList: IComment[]
}
export interface VirtualizedListProps {
  commentsList: IComment[]
}
export interface ToggleButtonProps {
  enableVirtualizer: boolean
  setEnableVirtualizer: React.Dispatch<React.SetStateAction<boolean>>
}

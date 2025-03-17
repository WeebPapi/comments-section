export interface IUser {
  fullName: string
  id: number
  username: string
}
export interface IComment {
  body: string
  id: number
  likes: number
  postId: number
  user: IUser
}
export interface IFetchData {
  comments: IComment[]
  limit: number
  skip: number
  total: number
}

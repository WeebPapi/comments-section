import { IFetchData } from "../../interfaces/apiInterfaces"
import { $axios } from "../axios"

export const getComments = async (
  limit?: number
): Promise<IFetchData | undefined> => {
  try {
    const data = await $axios.get(`?limit=${limit ? limit : 0}`)
    return data.data
  } catch (error) {
    console.error(error)
  }
}

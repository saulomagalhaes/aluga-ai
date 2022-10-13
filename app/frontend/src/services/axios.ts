import axios from 'axios'
import { IProductsInterface } from '../interfaces/IProductsInterface'

const URL = import.meta.env.VITE_HOSTNAME
const PORT = import.meta.env.VITE_BACKEND_PORT

export const fetchAllProducts = async (): Promise<
  IProductsInterface[] | []
> => {
  const url = `http://${URL}:${PORT}/`
  try {
    const response = await axios.get<IProductsInterface[]>(url)
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export const fetchProductByName = async (
  name: string
): Promise<IProductsInterface[] | []> => {
  const url = `http://${URL}:${PORT}/product?name=${name}`
  try {
    const response = await axios.get<IProductsInterface[]>(url)
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export const fetchOrderByAlphabetic = async (
  order: string
): Promise<IProductsInterface[] | []> => {
  const url = `http://${URL}:${PORT}/product?alphabet=${order}`
  try {
    const response = await axios.get<IProductsInterface[]>(url)
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export const fetchOrderByPrice = async (
  order: string
): Promise<IProductsInterface[] | []> => {
  const url = `http://${URL}:${PORT}/product?price=${order}`
  try {
    const response = await axios.get<IProductsInterface[]>(url)
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}

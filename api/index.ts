import axios, { AxiosInstance } from 'axios'

export const SERVER_URL = process.env.NEXT_PUBLIC_BASE_URL

const client = axios.create({
  baseURL: SERVER_URL,
  headers: { 'Content-Type': 'application/json' },
})

export { client }
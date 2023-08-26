import axios from 'axios'
import { parseCookies } from 'nookies'
import { QueryClient } from 'react-query'

const cookies = parseCookies()

export const requestV1 = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL + 'v1'
  // headers: {
  //   Authorization: cookies.ACCESS_TOKEN,
  // },
})

export const requestV2 = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL + 'v2'
  // headers: {
  //   Authorization: cookies.ACCESS_TOKEN,
  // },
})

const errorHandler = (error) => {
  // if (error && error.response) {
  //   if (error.response.status === 401) {
  //     if (typeof window !== 'undefined') {
  //       if (!window.location.pathname.includes('login')) {
  //         if(window.location.pathname.includes('checkout')){
  //           location.replace('/login?checkout=true');
  //         }
  //         else location.replace('/login');
  //       }
  //     }
  //   }
  // }

  return Promise.reject(error.response)
}

requestV1.interceptors.response.use((response) => response.data, errorHandler)
requestV2.interceptors.response.use((response) => response.data, errorHandler)

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
})

import { useQuery } from 'react-query'
import { requestV2 } from './http-client'
export * from './register'

const getFares = (params) => requestV2.get('/shipper-fares', params)

export const useFares = ({ params } = {}) => {
  return useQuery(['GET_FARES'], () => getFares(params), {
    enabled: true
  })
}

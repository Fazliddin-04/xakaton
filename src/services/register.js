import { useMutation, useQuery } from 'react-query'
import { requestV1 } from './http-client'

const get_users = (params) => requestV1.get('/shipper-users', { params })
const create_user = (data) => requestV1.post('/shipper-users', data)
const register = (data) => requestV1.post('/shippers/register', data)
const register_confirm = (data) => requestV1.post('/shippers/register-confirm', data)

export const useRegister = ({ params, getUsersProps = { enabled: false }, props }) => {
  const getUsers = useQuery(['GET_USERS'], () => get_users(params), getUsersProps)
  const createMutation = useMutation(create_user, props)
  const registerMutation = useMutation(register, props)
  const registerConfirm = useMutation(register_confirm, props)

  return {
    getUsers,
    createMutation,
    registerMutation,
    registerConfirm
  }
}

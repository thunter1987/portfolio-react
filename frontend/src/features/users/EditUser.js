import { useParams } from 'react-router-dom'
import EditUserForm from './EditUserForm'
import { useGetUsersQuery } from './usersApiSlice'
import { PulseLoader } from 'react-spinners/PulseLoader'
import useAuth from '../../hooks/useAuth'
import useTitle from '../../hooks/useTitle'

const EditUser = () => {
  const { username } = useAuth()
  useTitle(`Edit User -- ${username}`)
  const { id } = useParams()
  const { user } = useGetUsersQuery('usersList', {
    selectFromResult: ({ data }) => ({ user: data?.entities[id] }),
  })
  if (!user) return <PulseLoader color={'#FFF'} />
  const content = <EditUserForm user={user} />
  return content
}
export default EditUser

import NewNoteForm from './NewNoteForm'
import { useGetUsersQuery } from '../users/usersApiSlice'
import { PulseLoader } from 'react-spinners/PulseLoader'
import useAuth from '../../hooks/useAuth'
import useTitle from '../../hooks/useTitle'

const NewNote = () => {
  const { username } = useAuth()
  useTitle(`Edit User -- ${username}`)

  const { users } = useGetUsersQuery('usersList', {
    selectFromResult: ({ data }) => ({
      users: data?.ids.map(id => data?.entities[id]),
    }),
  })
  if (!users?.length) return <PulseLoader color={'#FFF'} />
  const content = <NewNoteForm users={users} />
  return content
}
export default NewNote

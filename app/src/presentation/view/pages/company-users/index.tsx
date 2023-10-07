import { UserCreate } from './create'
import { UserDelete } from './delete'
import { UserTable } from './table'
import { UserUpdate } from './update'

export const CompanyUsers = () => {
  return (
    <>
      <UserTable />
      <UserCreate />
      <UserDelete />
      <UserUpdate />
    </>
  )
}

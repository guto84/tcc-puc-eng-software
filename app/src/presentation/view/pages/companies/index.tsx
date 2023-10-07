import { CompanyTable } from './table'
import { CompanyCreate } from './create'
import { CompanyDelete } from './delete'
import { CompanyUpdate } from './update'

export const Companies = () => {
  return (
    <>
      <CompanyTable />
      <CompanyCreate />
      <CompanyDelete />
      <CompanyUpdate />
    </>
  )
}

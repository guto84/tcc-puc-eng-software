import { CompanyUpdateInput } from '../../../../../service'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  companyFindAll,
  companyUpdate,
  setCompanyUpdateModal,
} from '../../../../store/slices'
import { Component } from './component'

export const CompanyUpdate = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.companyUpdate)

  const handleCompanyUpdate = async (
    id: string,
    input: CompanyUpdateInput,
  ): Promise<void> => {
    await dispatch(companyUpdate({ id, input }))
    await dispatch(companyFindAll())
  }

  const handleCompanyUpdateModal = (open: boolean) => {
    dispatch(setCompanyUpdateModal(open))
  }

  return (
    <>
      <Component
        open={selector.modal}
        loading={selector.loading}
        values={selector.values}
        handleOpen={handleCompanyUpdateModal}
        handleCompanyUpdate={handleCompanyUpdate}
      />
    </>
  )
}

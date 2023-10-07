import { CompanyCreateInput } from '../../../../../service'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  companyCreate,
  setCompanyCreateModal,
  companyFindAll,
} from '../../../../store/slices'
import { Component } from './component'

export const CompanyCreate = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.companyCreate)

  const handleCompanyCreate = async (
    input: CompanyCreateInput,
  ): Promise<void> => {
    await dispatch(companyCreate(input))
    await dispatch(companyFindAll())
  }

  const handleCompanyCreateModal = (open: boolean) => {
    dispatch(setCompanyCreateModal(open))
  }

  return (
    <>
      <Component
        open={selector.modal}
        loading={selector.loading}
        handleOpen={handleCompanyCreateModal}
        handleCompanyCreate={handleCompanyCreate}
      />
    </>
  )
}

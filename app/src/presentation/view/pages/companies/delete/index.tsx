import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  companyFindAll,
  companyDelete,
  setCompanyDeleteModal,
} from '../../../../store/slices'
import { Component } from './component'

export const CompanyDelete = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.companyDelete)

  const handleCompanyDelete = async (): Promise<void> => {
    await dispatch(companyDelete(selector.id))
    await dispatch(companyFindAll())
  }

  const handleCompanyDeleteModal = (open: boolean) => {
    dispatch(setCompanyDeleteModal(open))
  }

  return (
    <>
      <Component
        open={selector.modal}
        loading={selector.loading}
        handleOpen={handleCompanyDeleteModal}
        handleCompanyDelete={handleCompanyDelete}
      />
    </>
  )
}

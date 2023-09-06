import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  userDelete,
  companyFindByIdUsers,
  setUserDeleteModal,
} from '../../../../store/slices'
import { Component } from './component'

export const UserDelete = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.userDelete)

  const handleCompanyDelete = async (): Promise<void> => {
    await dispatch(userDelete(selector.id))
    await dispatch(companyFindByIdUsers(params.id || ''))
  }

  const handleCompanyDeleteModal = (open: boolean) => {
    dispatch(setUserDeleteModal(open))
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

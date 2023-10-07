import { useCallback, useEffect } from 'react'
import { Component } from './component'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  companyFindAll,
  setCompanyCreateModal,
  setCompanyDeleteId,
  setCompanyDeleteModal,
  companyFindById,
  setCompanyUpdateModal,
} from '../../../../store/slices'

export const CompanyTable = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.companyFindAll)

  const handleCompanyFindAll = useCallback(async () => {
    await dispatch(companyFindAll())
  }, [])

  useEffect(() => {
    handleCompanyFindAll()
  }, [])

  const handleCompanyCreateModal = (open: boolean) => {
    dispatch(setCompanyCreateModal(open))
  }

  const handleCompanyUpdateModal = (id: string) => {
    dispatch(setCompanyUpdateModal(true))
    dispatch(companyFindById(id))
  }

  const handleCompanyDeleteModal = (id: string) => {
    dispatch(setCompanyDeleteModal(true))
    dispatch(setCompanyDeleteId(id))
  }

  return (
    <Component
      list={selector.list}
      loading={selector.loading}
      handleCreateModal={handleCompanyCreateModal}
      handleUpdateModal={handleCompanyUpdateModal}
      handleDeleteModal={handleCompanyDeleteModal}
    />
  )
}

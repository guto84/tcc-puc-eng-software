import { useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Component } from './component'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  setUserCreateModal,
  setUserUpdateModal,
  userFindById,
  setUserDeleteId,
  setUserDeleteModal,
  companyFindByIdUsers,
} from '../../../../store/slices'

export const UserTable = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.companyFindByIdUsers)

  const handleUserFindAll = useCallback(async () => {
    await dispatch(companyFindByIdUsers(params.id || ''))
  }, [])

  useEffect(() => {
    handleUserFindAll()
  }, [])

  const handleUserCreateModal = (open: boolean) => {
    dispatch(setUserCreateModal(open))
  }

  const handleUserUpdateModal = (id: string) => {
    dispatch(setUserUpdateModal(true))
    dispatch(userFindById(id))
  }

  const handleUserDeleteModal = (id: string) => {
    dispatch(setUserDeleteModal(true))
    dispatch(setUserDeleteId(id))
  }

  return (
    <Component
      company={selector.company}
      loading={selector.loading}
      handleCreateModal={handleUserCreateModal}
      handleUpdateModal={handleUserUpdateModal}
      handleDeleteModal={handleUserDeleteModal}
    />
  )
}

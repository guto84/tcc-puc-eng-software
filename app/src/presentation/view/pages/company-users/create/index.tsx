import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  companyFindByIdUsers,
  roleFindAll,
  setUserCreateModal,
  userCreate,
} from '../../../../store/slices'
import { Component } from './component'
import { useCallback, useEffect } from 'react'
import { UserCreateInput } from '../../../../../service'

export const UserCreate = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.userCreate)
  const selectorRole = useAppSelector((state) => state.roleFindAll)

  const handleRoleFindAll = useCallback(async () => {
    await dispatch(roleFindAll())
  }, [])

  useEffect(() => {
    handleRoleFindAll()
  }, [])

  const handleUserCreate = async (input: UserCreateInput): Promise<void> => {
    await dispatch(userCreate(input))
    await dispatch(companyFindByIdUsers(params.id || ''))
  }

  const handleUserCreateModal = (open: boolean) => {
    dispatch(setUserCreateModal(open))
  }

  return (
    <>
      <Component
        open={selector.modal}
        loading={selector.loading}
        roleList={selectorRole.list}
        roleLoading={selectorRole.loading}
        handleOpen={handleUserCreateModal}
        handleUserCreate={handleUserCreate}
      />
    </>
  )
}

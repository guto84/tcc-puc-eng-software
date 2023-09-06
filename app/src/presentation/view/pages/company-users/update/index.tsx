import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  companyFindByIdUsers,
  roleFindAll,
  setUserUpdateModal,
  userUpdate,
} from '../../../../store/slices'
import { Component } from './component'
import { useCallback, useEffect } from 'react'
import { UserUpdateInput } from '../../../../../service'

export const UserUpdate = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.userUpdate)
  const selectorRole = useAppSelector((state) => state.roleFindAll)

  const handleRoleFindAll = useCallback(async () => {
    await dispatch(roleFindAll())
  }, [])

  useEffect(() => {
    handleRoleFindAll()
  }, [])

  const handleUserUpdate = async (
    id: string,
    input: UserUpdateInput,
  ): Promise<void> => {
    await dispatch(userUpdate({ id, input }))
    await dispatch(companyFindByIdUsers(params.id || ''))
  }

  const handleUserUpdateModal = (open: boolean) => {
    dispatch(setUserUpdateModal(open))
  }

  return (
    <>
      <Component
        values={selector.values}
        open={selector.modal}
        loading={selector.loading}
        roleList={selectorRole.list}
        roleLoading={selectorRole.loading}
        handleOpen={handleUserUpdateModal}
        handleUserUpdate={handleUserUpdate}
      />
    </>
  )
}

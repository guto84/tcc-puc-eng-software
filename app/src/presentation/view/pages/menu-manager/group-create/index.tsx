import { GroupCreateInput } from '../../../../../service'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  groupCreate,
  groupFindAll,
  setGroupCreateModal,
} from '../../../../store/slices'
import { Component } from './component'

export const GroupCreate = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.groupCreate)

  const handleGroupCreate = async (input: GroupCreateInput): Promise<void> => {
    await dispatch(groupCreate(input))
    await dispatch(groupFindAll())
  }

  const handleGroupCreateModal = (open: boolean) => {
    dispatch(setGroupCreateModal(open))
  }

  return (
    <>
      <Component
        open={selector.modal}
        loading={selector.loading}
        handleOpen={handleGroupCreateModal}
        handleCreate={handleGroupCreate}
      />
    </>
  )
}

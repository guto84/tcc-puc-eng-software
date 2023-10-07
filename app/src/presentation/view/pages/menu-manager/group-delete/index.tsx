import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  groupDelete,
  groupFindAll,
  setGroupDeleteModal,
} from '../../../../store/slices'
import { Component } from './component'

export const GroupDelete = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.groupDelete)

  const handleGroupDelete = async (): Promise<void> => {
    await dispatch(groupDelete(selector.id))
    await dispatch(groupFindAll())
  }

  const handleGroupDeleteModal = (open: boolean) => {
    dispatch(setGroupDeleteModal(open))
  }

  return (
    <>
      <Component
        open={selector.modal}
        loading={selector.loading}
        handleOpen={handleGroupDeleteModal}
        handleDelete={handleGroupDelete}
      />
    </>
  )
}

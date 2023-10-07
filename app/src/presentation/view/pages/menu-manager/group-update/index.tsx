import { GroupUpdateInput } from '../../../../../service'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  groupFindAll,
  groupUpdate,
  setGroupUpdateModal,
} from '../../../../store/slices'
import { Component } from './component'

export const GroupUpdate = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.groupUpdate)

  const handleGroupUpdate = async (
    id: string,
    input: GroupUpdateInput,
  ): Promise<void> => {
    await dispatch(groupUpdate({ id, input }))
    await dispatch(groupFindAll())
  }

  const handleGroupUpdateModal = (open: boolean) => {
    dispatch(setGroupUpdateModal(open))
  }

  return (
    <>
      <Component
        open={selector.modal}
        loading={selector.loading}
        values={selector.values}
        handleOpen={handleGroupUpdateModal}
        handleGroupUpdate={handleGroupUpdate}
      />
    </>
  )
}

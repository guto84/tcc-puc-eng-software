import { CategoryCreateInput } from '../../../../../service'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  categoryCreate,
  groupFindAll,
  setCategoryCreateModal,
} from '../../../../store/slices'
import { Component } from './component'

export const CategoryCreate = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.categoryCreate)
  const selectorGroup = useAppSelector((state) => state.groupFindAll)

  const handleCategoryCreate = async (
    input: CategoryCreateInput,
  ): Promise<void> => {
    await dispatch(categoryCreate(input))
    await dispatch(groupFindAll())
  }

  const handleCategoryCreateModal = (open: boolean) => {
    dispatch(setCategoryCreateModal(open))
  }

  return (
    <>
      <Component
        open={selector.modal}
        loading={selector.loading}
        handleOpen={handleCategoryCreateModal}
        handleCreate={handleCategoryCreate}
        groupId={selectorGroup.groupId}
      />
    </>
  )
}

import { CategoryUpdateInput } from '../../../../../service'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  categoryUpdate,
  groupFindAll,
  setCategoryUpdateModal,
} from '../../../../store/slices'
import { Component } from './component'

export const CategoryUpdate = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.categoryUpdate)

  const handleCategoryUpdate = async (
    id: string,
    input: CategoryUpdateInput,
  ): Promise<void> => {
    await dispatch(categoryUpdate({ id, input }))
    await dispatch(groupFindAll())
  }

  const handleCategoryUpdateModal = (open: boolean) => {
    dispatch(setCategoryUpdateModal(open))
  }

  return (
    <>
      <Component
        open={selector.modal}
        loading={selector.loading}
        values={selector.values}
        handleOpen={handleCategoryUpdateModal}
        handleUpdate={handleCategoryUpdate}
      />
    </>
  )
}

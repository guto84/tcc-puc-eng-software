import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  categoryDelete,
  groupFindAll,
  setCategoryDeleteModal,
} from '../../../../store/slices'
import { Component } from './component'

export const CategoryDelete = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.categoryDelete)

  const handleCategoryDelete = async (): Promise<void> => {
    await dispatch(categoryDelete(selector.id))
    await dispatch(groupFindAll())
  }

  const handleCategoryDeleteModal = (open: boolean) => {
    dispatch(setCategoryDeleteModal(open))
  }

  return (
    <>
      <Component
        open={selector.modal}
        loading={selector.loading}
        handleOpen={handleCategoryDeleteModal}
        handleDelete={handleCategoryDelete}
      />
    </>
  )
}

import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  productDelete,
  groupFindAll,
  setProductDeleteModal,
} from '../../../../store/slices'
import { Component } from './component'

export const ProductDelete = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.productDelete)

  const handleProductDelete = async (): Promise<void> => {
    await dispatch(productDelete(selector.id))
    await dispatch(groupFindAll())
  }

  const handleProductDeleteModal = (open: boolean) => {
    dispatch(setProductDeleteModal(open))
  }

  return (
    <>
      <Component
        open={selector.modal}
        loading={selector.loading}
        handleOpen={handleProductDeleteModal}
        handleDelete={handleProductDelete}
      />
    </>
  )
}

import { ProductCreateInput } from '../../../../../service'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  groupFindAll,
  productCreate,
  setProductCreateModal,
} from '../../../../store/slices'
import { Component } from './component'

export const ProductCreate = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.productCreate)
  const selectorGroup = useAppSelector((state) => state.groupFindAll)

  const handleProductCreate = async (
    input: ProductCreateInput,
  ): Promise<void> => {
    await dispatch(productCreate(input))
    await dispatch(groupFindAll())
  }

  const handleProductCreateModal = (open: boolean) => {
    dispatch(setProductCreateModal(open))
  }

  return (
    <>
      <Component
        open={selector.modal}
        loading={selector.loading}
        handleOpen={handleProductCreateModal}
        handleCreate={handleProductCreate}
        categoryId={selectorGroup.categoryId}
      />
    </>
  )
}

import { ProductUpdateInput } from '../../../../../service'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  groupFindAll,
  productUpdate,
  setProductUpdateModal,
} from '../../../../store/slices'
import { Component } from './component'

export const ProductUpdate = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.productUpdate)

  const handleProductUpdate = async (
    id: string,
    input: ProductUpdateInput,
  ): Promise<void> => {
    await dispatch(productUpdate({ id, input }))
    await dispatch(groupFindAll())
  }

  const handleProductUpdateModal = (open: boolean) => {
    dispatch(setProductUpdateModal(open))
  }

  return (
    <>
      <Component
        open={selector.modal}
        loading={selector.loading}
        values={selector.values}
        handleOpen={handleProductUpdateModal}
        handleUpdate={handleProductUpdate}
      />
    </>
  )
}

import { OrderUpdateInput } from '../../../../../service'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { orderFindAll, setOrderShowModal } from '../../../../store/slices'
import { orderUpdate } from '../../../../store/slices/orders/order-update.slice'
import { Component } from './component'

export const OrderShow = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.orderFindById)
  const selectorFindAll = useAppSelector((state) => state.orderFindAll)

  const handleOrderUpdate = async (
    id: string,
    input: OrderUpdateInput,
  ): Promise<void> => {
    await dispatch(orderUpdate({ id, input }))
    await dispatch(orderFindAll(selectorFindAll.page + 1))
  }

  const handleModal = (value: boolean) => {
    dispatch(setOrderShowModal(value))
  }

  return (
    <Component
      order={selector.order}
      modal={selector.modal}
      loading={selector.loading}
      handleModal={handleModal}
      handleOrderUpdate={handleOrderUpdate}
    />
  )
}

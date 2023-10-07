import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { Component } from './component'
import {
  orderFindAll,
  orderFindById,
  setOrderPage,
  setOrderShowModal,
} from '../../../../store/slices'

export const OrderTable = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.orderFindAll)

  const handleOrderFindAll = useCallback(async () => {
    await dispatch(orderFindAll(1))
  }, [])

  useEffect(() => {
    handleOrderFindAll()
  }, [])

  const handlePage = async (value: number) => {
    dispatch(setOrderPage(value))
    await dispatch(orderFindAll(value))
  }

  const handleShow = async (id: string) => {
    dispatch(setOrderShowModal(true))
    await dispatch(orderFindById(id))
  }

  return (
    <Component
      list={selector.list}
      loading={selector.loading}
      totalPages={selector.totalPages}
      page={selector.page}
      handlePage={handlePage}
      handleShow={handleShow}
    />
  )
}

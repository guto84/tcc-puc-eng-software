import { useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { orderFindById } from '../../../../store/slices'
import { Component } from './component'

export const Detail = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.orderFindById)

  const handleOrderFindById = useCallback(async () => {
    dispatch(orderFindById(params.id || ''))
  }, [])

  useEffect(() => {
    handleOrderFindById()
  }, [])

  return <Component order={selector.order} loading={selector.loading} />
}

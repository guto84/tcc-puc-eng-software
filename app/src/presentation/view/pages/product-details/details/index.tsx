import { useNavigate, useParams } from 'react-router-dom'
import { Loading, Toast } from '../../../components'
import { Component } from './component'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { useCallback, useEffect } from 'react'
import { productFindByIdConfigsItems } from '../../../../store/slices'

export const Details = () => {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.productFindByIdConfigsItems)

  const handleProductDetails = useCallback(async () => {
    await dispatch(productFindByIdConfigsItems(params.id || ''))
  }, [])

  useEffect(() => {
    handleProductDetails()
  }, [])

  const handleBack = () => navigate(`/${params.url}`)

  return (
    <>
      <Component product={selector.product} handleBack={handleBack} />
      <Loading loading={selector.loading} />
      <Toast />
    </>
  )
}

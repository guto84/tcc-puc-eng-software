import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { Component } from './component'
import { companyMenu } from '../../../../store/slices'
import { Loading, Toast } from '../../../components'
import { useParams } from 'react-router-dom'

export const MenuTable = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.companyMenu)

  const handleCompanyMenu = useCallback(async () => {
    await dispatch(companyMenu(params.url || ''))
  }, [])

  useEffect(() => {
    handleCompanyMenu()
  }, [])

  return (
    <>
      <Component menu={selector.menu} />
      <Loading loading={selector.loading} />
      <Toast />
    </>
  )
}

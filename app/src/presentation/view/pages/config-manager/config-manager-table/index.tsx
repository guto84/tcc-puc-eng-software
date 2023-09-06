import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { Component } from './component'
import {
  categoryFindByIdConfigsItems,
  configurationFindById,
  configurationItemFindById,
  setConfigId,
  setConfigurationCreateModal,
  setConfigurationDeleteId,
  setConfigurationDeleteModal,
  setConfigurationItemCreateModal,
  setConfigurationItemDeleteId,
  setConfigurationItemDeleteModal,
  setConfigurationItemUpdateModal,
  setConfigurationUpdateModal,
} from '../../../../store/slices'
import { useParams } from 'react-router-dom'
import { Loading, Toast } from '../../../components'

export const ConfigManagerTable = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.categoryFindByIdConfigsItems)

  const handleCompanyFindAll = useCallback(async () => {
    await dispatch(categoryFindByIdConfigsItems(params.id || ''))
  }, [])

  useEffect(() => {
    handleCompanyFindAll()
  }, [])

  const handleConfigCreateModal = (open: boolean) => {
    dispatch(setConfigurationCreateModal(open))
  }

  const handleConfigUpdateModal = (id: string) => {
    dispatch(setConfigurationUpdateModal(true))
    dispatch(configurationFindById(id))
  }

  const handleConfigDeleteModal = (id: string) => {
    dispatch(setConfigurationDeleteModal(true))
    dispatch(setConfigurationDeleteId(id))
  }

  const handleConfigItemCreateModal = (open: boolean, id: string) => {
    dispatch(setConfigId(id))
    dispatch(setConfigurationItemCreateModal(open))
  }

  const handleConfigItemUpdateModal = (id: string) => {
    dispatch(setConfigurationItemUpdateModal(true))
    dispatch(configurationItemFindById(id))
  }

  const handleConfigItemDeleteModal = (id: string) => {
    dispatch(setConfigurationItemDeleteModal(true))
    dispatch(setConfigurationItemDeleteId(id))
  }

  return (
    <>
      <Component
        category={selector.category}
        handleConfigCreateModal={handleConfigCreateModal}
        handleConfigDeleteModal={handleConfigDeleteModal}
        handleConfigUpdateModal={handleConfigUpdateModal}
        handleConfigItemCreateModal={handleConfigItemCreateModal}
        handleConfigItemUpdateModal={handleConfigItemUpdateModal}
        handleConfigItemDeleteModal={handleConfigItemDeleteModal}
      />
      <Loading loading={selector.loading} />
      <Toast />
    </>
  )
}

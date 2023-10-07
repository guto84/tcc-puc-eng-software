import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  categoryFindByIdConfigsItems,
  configurationDelete,
  setConfigurationDeleteModal,
} from '../../../../store/slices'
import { Component } from './component'

export const ConfigDelete = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.configurationDelete)

  const handleConfigurationDelete = async (): Promise<void> => {
    await dispatch(configurationDelete(selector.id))
    await dispatch(categoryFindByIdConfigsItems(params.id || ''))
  }

  const handleConfigurationDeleteModal = (open: boolean) => {
    dispatch(setConfigurationDeleteModal(open))
  }

  return (
    <>
      <Component
        open={selector.modal}
        loading={selector.loading}
        handleOpen={handleConfigurationDeleteModal}
        handleDelete={handleConfigurationDelete}
      />
    </>
  )
}

import { useParams } from 'react-router-dom'
import { ConfigurationCreateInput } from '../../../../../service'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  categoryFindByIdConfigsItems,
  configurationCreate,
  setConfigurationCreateModal,
} from '../../../../store/slices'
import { Component } from './component'

export const ConfigCreate = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.configurationCreate)

  const handleConfigurationCreate = async (
    input: ConfigurationCreateInput,
  ): Promise<void> => {
    await dispatch(configurationCreate(input))
    await dispatch(categoryFindByIdConfigsItems(params.id || ''))
  }

  const handleConfigurationCreateModal = (open: boolean) => {
    dispatch(setConfigurationCreateModal(open))
  }

  return (
    <>
      <Component
        open={selector.modal}
        loading={selector.loading}
        handleOpen={handleConfigurationCreateModal}
        handleCreate={handleConfigurationCreate}
        categoryId={params.id || ''}
      />
    </>
  )
}

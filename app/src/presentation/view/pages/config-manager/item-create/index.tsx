import { useParams } from 'react-router-dom'
import { ConfigurationItemCreateInput } from '../../../../../service'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  configurationItemCreate,
  setConfigurationItemCreateModal,
  categoryFindByIdConfigsItems,
} from '../../../../store/slices'
import { Component } from './component'

export const ItemCreate = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.configurationItemCreate)
  const selectorCategory = useAppSelector(
    (state) => state.categoryFindByIdConfigsItems,
  )

  const handleConfigurationItemCreate = async (
    input: ConfigurationItemCreateInput,
  ): Promise<void> => {
    await dispatch(configurationItemCreate(input))
    await dispatch(categoryFindByIdConfigsItems(params.id || ''))
  }

  const handleConfigurationItemCreateModal = (open: boolean) => {
    dispatch(setConfigurationItemCreateModal(open))
  }

  return (
    <>
      <Component
        open={selector.modal}
        loading={selector.loading}
        handleOpen={handleConfigurationItemCreateModal}
        handleCreate={handleConfigurationItemCreate}
        configId={selectorCategory.configId}
      />
    </>
  )
}

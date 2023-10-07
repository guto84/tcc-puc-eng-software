import { useParams } from 'react-router-dom'
import { ConfigurationItemUpdateInput } from '../../../../../service'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  categoryFindByIdConfigsItems,
  configurationItemUpdate,
  setConfigurationItemUpdateModal,
} from '../../../../store/slices'
import { Component } from './component'

export const ItemUpdate = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.configurationItemUpdate)

  const handleConfigItemUpdate = async (
    id: string,
    input: ConfigurationItemUpdateInput,
  ): Promise<void> => {
    await dispatch(configurationItemUpdate({ id, input }))
    await dispatch(categoryFindByIdConfigsItems(params.id || ''))
  }

  const handleConfigItemUpdateModal = (open: boolean) => {
    dispatch(setConfigurationItemUpdateModal(open))
  }

  return (
    <>
      <Component
        open={selector.modal}
        loading={selector.loading}
        values={selector.values}
        handleOpen={handleConfigItemUpdateModal}
        handleUpdate={handleConfigItemUpdate}
      />
    </>
  )
}

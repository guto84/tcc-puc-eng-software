import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  categoryFindByIdConfigsItems,
  configurationUpdate,
  setConfigurationUpdateModal,
} from '../../../../store/slices'
import { Component } from './component'
import { ConfigurationUpdateInput } from '../../../../../service'

export const ConfigUpdate = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.configurationUpdate)

  const handleConfigUpdate = async (
    id: string,
    input: ConfigurationUpdateInput,
  ): Promise<void> => {
    await dispatch(configurationUpdate({ id, input }))
    await dispatch(categoryFindByIdConfigsItems(params.id || ''))
  }

  const handleConfigUpdateModal = (open: boolean) => {
    dispatch(setConfigurationUpdateModal(open))
  }

  return (
    <>
      <Component
        open={selector.modal}
        loading={selector.loading}
        values={selector.values}
        handleOpen={handleConfigUpdateModal}
        handleUpdate={handleConfigUpdate}
      />
    </>
  )
}

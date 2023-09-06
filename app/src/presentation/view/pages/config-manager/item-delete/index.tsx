import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  categoryFindByIdConfigsItems,
  configurationItemDelete,
  setConfigurationItemDeleteModal,
} from '../../../../store/slices'
import { Component } from './component'

export const ItemDelete = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.configurationItemDelete)

  const handleConfigItemDelete = async (): Promise<void> => {
    await dispatch(configurationItemDelete(selector.id))
    await dispatch(categoryFindByIdConfigsItems(params.id || ''))
  }

  const handleConfigItemDeleteModal = (open: boolean) => {
    dispatch(setConfigurationItemDeleteModal(open))
  }

  return (
    <>
      <Component
        open={selector.modal}
        loading={selector.loading}
        handleOpen={handleConfigItemDeleteModal}
        handleDelete={handleConfigItemDelete}
      />
    </>
  )
}

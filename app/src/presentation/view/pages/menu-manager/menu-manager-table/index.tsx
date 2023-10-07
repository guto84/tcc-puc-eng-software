import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { Component } from './component'
import {
  categoryFindById,
  groupFindAll,
  groupFindById,
  productFindById,
  setCategoryCreateModal,
  setCategoryDeleteId,
  setCategoryDeleteModal,
  setCategoryId,
  setCategoryUpdateModal,
  setGroupCreateModal,
  setGroupDeleteId,
  setGroupDeleteModal,
  setGroupId,
  setGroupUpdateModal,
  setProductCreateModal,
  setProductDeleteId,
  setProductDeleteModal,
  setProductUpdateModal,
} from '../../../../store/slices'
import { Loading, Toast } from '../../../components'

export const MenuManagerTable = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.groupFindAll)

  const handleCompanyFindAll = useCallback(async () => {
    await dispatch(groupFindAll())
  }, [])

  useEffect(() => {
    handleCompanyFindAll()
  }, [])

  const handleGroupCreateModal = (open: boolean) => {
    dispatch(setGroupCreateModal(open))
  }

  const handleGroupUpdateModal = (id: string) => {
    dispatch(setGroupUpdateModal(true))
    dispatch(groupFindById(id))
  }

  const handleGroupDeleteModal = (id: string) => {
    dispatch(setGroupDeleteModal(true))
    dispatch(setGroupDeleteId(id))
  }

  const handleCategoryCreateModal = (open: boolean, id: string) => {
    dispatch(setGroupId(id))
    dispatch(setCategoryCreateModal(open))
  }

  const handleCategoryUpdateModal = (id: string) => {
    dispatch(setCategoryUpdateModal(true))
    dispatch(categoryFindById(id))
  }

  const handleCategoryDeleteModal = (id: string) => {
    dispatch(setCategoryDeleteModal(true))
    dispatch(setCategoryDeleteId(id))
  }

  const handleProductCreateModal = (open: boolean, id: string) => {
    dispatch(setCategoryId(id))
    dispatch(setProductCreateModal(open))
  }

  const handleProductUpdateModal = (id: string) => {
    dispatch(setProductUpdateModal(true))
    dispatch(productFindById(id))
  }

  const handleProductDeleteModal = (id: string) => {
    dispatch(setProductDeleteModal(true))
    dispatch(setProductDeleteId(id))
  }

  return (
    <>
      <Component
        list={selector.list}
        handleGroupCreateModal={handleGroupCreateModal}
        handleGroupDeleteModal={handleGroupDeleteModal}
        handleGroupUpdateModal={handleGroupUpdateModal}
        handleCategoryCreateModal={handleCategoryCreateModal}
        handleCategoryDeleteModal={handleCategoryDeleteModal}
        handleCategoryUpdateModal={handleCategoryUpdateModal}
        handleProductCreateModal={handleProductCreateModal}
        handleProductUpdateModal={handleProductUpdateModal}
        handleProductDeleteModal={handleProductDeleteModal}
      />
      <Loading loading={selector.loading} />
      <Toast />
    </>
  )
}

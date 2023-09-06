import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CategoryDeleteService } from '../../../../service'
import { toastError, toastSuccess } from '../../../view/utils'

export type categoryDeleteState = {
  modal: boolean
  loading: boolean
  id: string
}

export const categoryDeleteInitialState: categoryDeleteState = {
  modal: false,
  loading: false,
  id: '',
}

export const categoryDelete = createAsyncThunk(
  'categories/delete',
  async (id: string) => {
    const service = new CategoryDeleteService()
    await service.execute(id)
  },
)

export const CategoryDeleteSlice = createSlice({
  name: 'CategoryDeleteSlice',
  initialState: categoryDeleteInitialState,
  reducers: {
    setCategoryDeleteModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload
    },
    setCategoryDeleteLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setCategoryDeleteId: (state, action: PayloadAction<string>) => {
      state.id = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(categoryDelete.pending, (state) => {
        state.loading = true
      })
      .addCase(categoryDelete.fulfilled, (state) => {
        state.modal = false
        state.loading = false
        toastSuccess('Excluido com sucesso!')
      })
      .addCase(categoryDelete.rejected, (state) => {
        state.loading = false
        toastError('Erro ao excluir, tente novamente!')
      })
  },
})

export const {
  setCategoryDeleteModal,
  setCategoryDeleteLoading,
  setCategoryDeleteId,
} = CategoryDeleteSlice.actions

export default CategoryDeleteSlice.reducer

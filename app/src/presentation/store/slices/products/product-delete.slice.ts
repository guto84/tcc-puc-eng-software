import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastError, toastSuccess } from '../../../view/utils'
import { ProductDeleteService } from '../../../../service'

export type productDeleteState = {
  modal: boolean
  loading: boolean
  id: string
}

export const productDeleteInitialState: productDeleteState = {
  modal: false,
  loading: false,
  id: '',
}

export const productDelete = createAsyncThunk(
  'products/delete',
  async (id: string) => {
    const service = new ProductDeleteService()
    await service.execute(id)
  },
)

export const ProductDeleteSlice = createSlice({
  name: 'ProductDeleteSlice',
  initialState: productDeleteInitialState,
  reducers: {
    setProductDeleteModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload
    },
    setProductDeleteLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setProductDeleteId: (state, action: PayloadAction<string>) => {
      state.id = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(productDelete.pending, (state) => {
        state.loading = true
      })
      .addCase(productDelete.fulfilled, (state) => {
        state.modal = false
        state.loading = false
        toastSuccess('Excluido com sucesso!')
      })
      .addCase(productDelete.rejected, (state) => {
        state.loading = false
        toastError('Erro ao excluir, tente novamente!')
      })
  },
})

export const {
  setProductDeleteModal,
  setProductDeleteLoading,
  setProductDeleteId,
} = ProductDeleteSlice.actions

export default ProductDeleteSlice.reducer

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastError, toastSuccess } from '../../../view/utils'
import { ProductCreateInput, ProductCreateService } from '../../../../service'

export type ProductCreateState = {
  modal: boolean
  loading: boolean
}

export const productCreateInitialState: ProductCreateState = {
  modal: false,
  loading: false,
}

export const productCreate = createAsyncThunk(
  'products/create',
  async (input: ProductCreateInput) => {
    const service = new ProductCreateService()
    await service.execute(input)
  },
)

export const ProductCreateSlice = createSlice({
  name: 'ProductCreateSlice',
  initialState: productCreateInitialState,
  reducers: {
    setProductCreateModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload
    },
    setProductCreateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(productCreate.pending, (state) => {
        state.loading = true
      })
      .addCase(productCreate.fulfilled, (state) => {
        state.modal = false
        state.loading = false
        toastSuccess('Cadastrado com sucesso!')
      })
      .addCase(productCreate.rejected, (state) => {
        state.loading = false
        toastError('Erro ao cadastrar, tente novamente!')
      })
  },
})

export const { setProductCreateModal, setProductCreateLoading } =
  ProductCreateSlice.actions

export default ProductCreateSlice.reducer

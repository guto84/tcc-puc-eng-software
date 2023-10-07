import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastError, toastSuccess } from '../../../view/utils'
import {
  ProductFindByIdService,
  ProductOutput,
  ProductUpdateInput,
  ProductUpdateService,
} from '../../../../service'

export type ProductUpdateState = {
  modal: boolean
  loading: boolean
  values: ProductOutput
}

export const productUpdateInitialState: ProductUpdateState = {
  modal: false,
  loading: false,
  values: {
    id: '',
    name: '',
    description: '',
    price: 0,
    category: {
      id: '',
    },
  },
}

type Props = {
  id: string
  input: ProductUpdateInput
}

export const productFindById = createAsyncThunk(
  'products/findById',
  async (id: string) => {
    const service = new ProductFindByIdService()
    const response = await service.execute(id)
    return response
  },
)

export const productUpdate = createAsyncThunk(
  'products/update',
  async ({ id, input }: Props) => {
    const service = new ProductUpdateService()
    await service.execute(id, input)
  },
)

export const ProductUpdateSlice = createSlice({
  name: 'ProductUpdateSlice',
  initialState: productUpdateInitialState,
  reducers: {
    setProductUpdateModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload
    },
    setProductUpdateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(productFindById.pending, (state) => {
        state.loading = true
      })
      .addCase(productFindById.fulfilled, (state, action) => {
        state.values = action.payload
        state.loading = false
      })
      .addCase(productFindById.rejected, (state) => {
        state.loading = false
        toastError('Erro ao buscar dados, tente novamente!')
      })

      .addCase(productUpdate.pending, (state) => {
        state.loading = true
      })
      .addCase(productUpdate.fulfilled, (state) => {
        state.modal = false
        state.loading = false
        toastSuccess('Editado com sucesso!')
      })
      .addCase(productUpdate.rejected, (state) => {
        state.loading = false
        toastError('Erro ao editar, tente novamente!')
      })
  },
})

export const { setProductUpdateModal, setProductUpdateLoading } =
  ProductUpdateSlice.actions

export default ProductUpdateSlice.reducer

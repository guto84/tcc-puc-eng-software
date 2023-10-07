import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastError } from '../../../view/utils'
import {
  ProductFindByIdConfigusItemsService,
  ProductConfigsItemsOutput,
} from '../../../../service'

export type ProductFindByIdConfigsItemsState = {
  loading: boolean
  product: ProductConfigsItemsOutput
}

const initialState: ProductFindByIdConfigsItemsState = {
  loading: true,
  product: {
    id: '',
    name: '',
    description: '',
    price: 0,
    category: {
      id: '',
      name: '',
      configurations: [
        {
          id: '',
          name: '',
          minimum: 0,
          maximum: 0,
          configurationItems: [{ id: '', name: '', description: '', price: 0 }],
        },
      ],
    },
  },
}

export const productFindByIdConfigsItems = createAsyncThunk(
  'products/findByIdConfigsItems',
  async (id: string) => {
    const service = new ProductFindByIdConfigusItemsService()
    const response = await service.execute(id)
    return response
  },
)

export const ProductFindByIdConfigsItemsSlice = createSlice({
  name: 'products/FindByIdConfigsItems',
  initialState: initialState,
  reducers: {
    setProductConfigsItems: (
      state,
      action: PayloadAction<ProductConfigsItemsOutput>,
    ) => {
      state.product = action.payload
    },
    setProductConfigsItemsLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(productFindByIdConfigsItems.pending, (state) => {
        state.loading = true
      })
      .addCase(productFindByIdConfigsItems.fulfilled, (state, action) => {
        state.product = action.payload
        state.loading = false
      })
      .addCase(productFindByIdConfigsItems.rejected, (state) => {
        state.loading = false
        toastError('Erro ao buscar dados, tente novamente!')
      })
  },
})

export const { setProductConfigsItems, setProductConfigsItemsLoading } =
  ProductFindByIdConfigsItemsSlice.actions

export default ProductFindByIdConfigsItemsSlice.reducer

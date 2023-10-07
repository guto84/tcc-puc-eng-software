import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastError } from '../../../view/utils'
import {
  CategoryConfigsItemsOutput,
  CategoryFindByIdConfigsItemsService,
} from '../../../../service'

export type CategoryFindByIdConfigsItemsState = {
  loading: boolean
  category: CategoryConfigsItemsOutput
  configId: string
  itemId: string
}

export const initialState: CategoryFindByIdConfigsItemsState = {
  loading: true,
  category: {
    id: '',
    name: '',
    configurations: [
      {
        id: '',
        name: '',
        minimum: 0,
        maximum: 0,
        configurationItems: [{ id: '', name: '', price: 0 }],
      },
    ],
  },
  configId: '',
  itemId: '',
}

export const categoryFindByIdConfigsItems = createAsyncThunk(
  'categories/findByIdConfigsItems',
  async (id: string) => {
    const service = new CategoryFindByIdConfigsItemsService()
    const response = await service.execute(id)
    return response
  },
)

export const CategoryFindByIdConfigsItemsSlice = createSlice({
  name: 'groups/FindAllSlice',
  initialState: initialState,
  reducers: {
    setCategoryConfigsItems: (
      state,
      action: PayloadAction<CategoryConfigsItemsOutput>,
    ) => {
      state.category = action.payload
    },
    setCategoryConfigsItemsLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setConfigId: (state, action: PayloadAction<string>) => {
      state.configId = action.payload
    },
    setItemId: (state, action: PayloadAction<string>) => {
      state.itemId = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(categoryFindByIdConfigsItems.pending, (state) => {
        state.loading = true
      })
      .addCase(categoryFindByIdConfigsItems.fulfilled, (state, action) => {
        state.category = action.payload
        state.loading = false
      })
      .addCase(categoryFindByIdConfigsItems.rejected, (state) => {
        state.loading = false
        toastError('Erro ao buscar dados, tente novamente!')
      })
  },
})

export const {
  setCategoryConfigsItems,
  setCategoryConfigsItemsLoading,
  setConfigId,
  setItemId,
} = CategoryFindByIdConfigsItemsSlice.actions

export default CategoryFindByIdConfigsItemsSlice.reducer

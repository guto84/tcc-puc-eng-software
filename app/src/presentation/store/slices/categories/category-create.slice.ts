import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastError, toastSuccess } from '../../../view/utils'
import { CategoryCreateInput, CategoryCreateService } from '../../../../service'

export type CategoryCreateState = {
  modal: boolean
  loading: boolean
}

export const categoryCreateInitialState: CategoryCreateState = {
  modal: false,
  loading: false,
}

export const categoryCreate = createAsyncThunk(
  'categories/create',
  async (input: CategoryCreateInput) => {
    const service = new CategoryCreateService()
    await service.execute(input)
  },
)

export const CategoryCreateSlice = createSlice({
  name: 'CategoryCreateSlice',
  initialState: categoryCreateInitialState,
  reducers: {
    setCategoryCreateModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload
    },
    setCategoryCreateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(categoryCreate.pending, (state) => {
        state.loading = true
      })
      .addCase(categoryCreate.fulfilled, (state) => {
        state.modal = false
        state.loading = false
        toastSuccess('Cadastrado com sucesso!')
      })
      .addCase(categoryCreate.rejected, (state) => {
        state.loading = false
        toastError('Erro ao cadastrar, tente novamente!')
      })
  },
})

export const { setCategoryCreateModal, setCategoryCreateLoading } =
  CategoryCreateSlice.actions

export default CategoryCreateSlice.reducer

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastError, toastSuccess } from '../../../view/utils'
import {
  CategoryFindByIdService,
  CategoryOutput,
  CategoryUpdateInput,
  CategoryUpdateService,
} from '../../../../service'

export type CategoryUpdateState = {
  modal: boolean
  loading: boolean
  values: CategoryOutput
}

export const categoryUpdateInitialState: CategoryUpdateState = {
  modal: false,
  loading: false,
  values: {
    id: '',
    name: '',
    group: {
      id: '',
    },
  },
}

type Props = {
  id: string
  input: CategoryUpdateInput
}

export const categoryFindById = createAsyncThunk(
  'categories/findById',
  async (id: string) => {
    const service = new CategoryFindByIdService()
    const response = await service.execute(id)
    return response
  },
)

export const categoryUpdate = createAsyncThunk(
  'categories/update',
  async ({ id, input }: Props) => {
    const service = new CategoryUpdateService()
    await service.execute(id, input)
  },
)

export const CategoryUpdateSlice = createSlice({
  name: 'CategoryUpdateSlice',
  initialState: categoryUpdateInitialState,
  reducers: {
    setCategoryUpdateModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload
    },
    setCategoryUpdateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(categoryFindById.pending, (state) => {
        state.loading = true
      })
      .addCase(categoryFindById.fulfilled, (state, action) => {
        state.values = action.payload
        state.loading = false
      })
      .addCase(categoryFindById.rejected, (state) => {
        state.loading = false
        toastError('Erro ao buscar dados, tente novamente!')
      })

      .addCase(categoryUpdate.pending, (state) => {
        state.loading = true
      })
      .addCase(categoryUpdate.fulfilled, (state) => {
        state.modal = false
        state.loading = false
        toastSuccess('Editado com sucesso!')
      })
      .addCase(categoryUpdate.rejected, (state) => {
        state.loading = false
        toastError('Erro ao editar, tente novamente!')
      })
  },
})

export const { setCategoryUpdateModal, setCategoryUpdateLoading } =
  CategoryUpdateSlice.actions

export default CategoryUpdateSlice.reducer

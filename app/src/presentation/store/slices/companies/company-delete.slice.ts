import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CompanyDeleteService } from '../../../../service'
import { toastError, toastSuccess } from '../../../view/utils'

export type CompanyDeleteState = {
  modal: boolean
  loading: boolean
  id: string
}

export const companyDeleteInitialState: CompanyDeleteState = {
  modal: false,
  loading: false,
  id: '',
}

export const companyDelete = createAsyncThunk(
  'companies/delete',
  async (id: string) => {
    const service = new CompanyDeleteService()
    await service.execute(id)
  },
)

export const CompanyDeleteSlice = createSlice({
  name: 'CompanyDeleteSlice',
  initialState: companyDeleteInitialState,
  reducers: {
    setCompanyDeleteModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload
    },
    setCompanyDeleteLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setCompanyDeleteId: (state, action: PayloadAction<string>) => {
      state.id = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(companyDelete.pending, (state) => {
        state.loading = true
      })
      .addCase(companyDelete.fulfilled, (state) => {
        state.modal = false
        state.loading = false
        toastSuccess('Excluido com sucesso!')
      })
      .addCase(companyDelete.rejected, (state) => {
        state.loading = false
        toastError('Erro ao excluir, tente novamente!')
      })
  },
})

export const {
  setCompanyDeleteModal,
  setCompanyDeleteLoading,
  setCompanyDeleteId,
} = CompanyDeleteSlice.actions

export default CompanyDeleteSlice.reducer

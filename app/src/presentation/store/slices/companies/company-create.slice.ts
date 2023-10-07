import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CompanyCreateInput, CompanyCreateService } from '../../../../service'
import { toastError, toastSuccess } from '../../../view/utils'

export type CompanyCreateState = {
  modal: boolean
  loading: boolean
}

export const companyCreateInitialState: CompanyCreateState = {
  modal: false,
  loading: false,
}

export const companyCreate = createAsyncThunk(
  'companies/create',
  async (input: CompanyCreateInput) => {
    const service = new CompanyCreateService()
    await service.execute(input)
  },
)

export const CompanyCreateSlice = createSlice({
  name: 'CompanyCreateSlice',
  initialState: companyCreateInitialState,
  reducers: {
    setCompanyCreateModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload
    },
    setCompanyCreateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(companyCreate.pending, (state) => {
        state.loading = true
      })
      .addCase(companyCreate.fulfilled, (state) => {
        state.modal = false
        state.loading = false
        toastSuccess('Cadastrado com sucesso!')
      })
      .addCase(companyCreate.rejected, (state) => {
        state.loading = false
        toastError('Erro ao cadastrar, tente novamente!')
      })
  },
})

export const { setCompanyCreateModal, setCompanyCreateLoading } =
  CompanyCreateSlice.actions

export default CompanyCreateSlice.reducer

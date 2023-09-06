import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CompanyFindAllService, CompanyOutput } from '../../../../service'
import { toastError } from '../../../view/utils'

export type CompanyFindAllState = {
  loading: boolean
  list: CompanyOutput[]
}

export const companyFindAllInitialState: CompanyFindAllState = {
  loading: true,
  list: [],
}

export const companyFindAll = createAsyncThunk(
  'companies/findAll',
  async () => {
    const service = new CompanyFindAllService()
    const response = await service.execute()
    return response
  },
)

export const CompanyFindAllSlice = createSlice({
  name: 'CompanyFindAllSlice',
  initialState: companyFindAllInitialState,
  reducers: {
    setCompanyList: (state, action: PayloadAction<CompanyOutput[]>) => {
      state.list = action.payload
    },
    setCompanyListLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(companyFindAll.pending, (state) => {
        state.loading = true
      })
      .addCase(companyFindAll.fulfilled, (state, action) => {
        state.list = action.payload
        state.loading = false
      })
      .addCase(companyFindAll.rejected, (state) => {
        state.loading = false
        toastError('Erro ao buscar dados, tente novamente!')
      })
  },
})

export const { setCompanyList, setCompanyListLoading } =
  CompanyFindAllSlice.actions

export default CompanyFindAllSlice.reducer

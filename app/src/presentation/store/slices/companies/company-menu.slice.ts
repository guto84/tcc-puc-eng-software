import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastError } from '../../../view/utils'
import { CompanyMenuOutput, CompanyMenuService } from '../../../../service'

export type CompanyMenuState = {
  loading: boolean
  menu: CompanyMenuOutput
}

export const companyMenuInitialState: CompanyMenuState = {
  loading: true,
  menu: {
    id: '',
    name: '',
    url: '',
    groups: [
      {
        id: '',
        name: '',
        categories: [
          {
            id: '',
            name: '',
            products: [
              {
                id: '',
                name: '',
                description: '',
                price: 0,
              },
            ],
          },
        ],
      },
    ],
  },
}

export const companyMenu = createAsyncThunk(
  'companies/menu',
  async (url: string) => {
    const service = new CompanyMenuService()
    const response = await service.execute(url)
    return response
  },
)

export const CompanyMenuSlice = createSlice({
  name: 'companies/menu',
  initialState: companyMenuInitialState,
  reducers: {
    setCompanyMenu: (state, action: PayloadAction<CompanyMenuOutput>) => {
      state.menu = action.payload
    },
    setCompanyMenuLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(companyMenu.pending, (state) => {
        state.loading = true
      })
      .addCase(companyMenu.fulfilled, (state, action) => {
        state.menu = action.payload
        state.loading = false
      })
      .addCase(companyMenu.rejected, (state) => {
        state.loading = false
        toastError('Erro ao buscar dados, tente novamente!')
      })
  },
})

export const { setCompanyMenu, setCompanyMenuLoading } =
  CompanyMenuSlice.actions

export default CompanyMenuSlice.reducer

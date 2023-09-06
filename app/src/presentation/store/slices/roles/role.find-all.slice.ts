import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastError } from '../../../view/utils'
import { RoleFindAllService, RoleOutput } from '../../../../service'

export type RoleFindAllState = {
  loading: boolean
  list: RoleOutput[]
}

export const roleFindAllInitialState: RoleFindAllState = {
  loading: true,
  list: [],
}

export const roleFindAll = createAsyncThunk('roles/findAll', async () => {
  const service = new RoleFindAllService()
  return await service.execute()
})

export const RoleFindAllSlice = createSlice({
  name: 'RoleFindAllSlice',
  initialState: roleFindAllInitialState,
  reducers: {
    setRoleList: (state, action: PayloadAction<RoleOutput[]>) => {
      state.list = action.payload
    },
    setRoleListLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(roleFindAll.pending, (state) => {
        state.loading = true
      })
      .addCase(roleFindAll.fulfilled, (state, action) => {
        state.list = action.payload
        state.loading = false
      })
      .addCase(roleFindAll.rejected, (state) => {
        state.loading = false
        toastError('Erro ao buscar dados, tente novamente!')
      })
  },
})

export const { setRoleList, setRoleListLoading } = RoleFindAllSlice.actions

export default RoleFindAllSlice.reducer

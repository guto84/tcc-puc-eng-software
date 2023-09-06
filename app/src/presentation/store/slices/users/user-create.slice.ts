import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastError, toastSuccess } from '../../../view/utils'
import { UserCreateInput, UserCreateService } from '../../../../service'

export type UserCreateState = {
  modal: boolean
  loading: boolean
}

export const userCreateInitialState: UserCreateState = {
  modal: false,
  loading: false,
}

export const userCreate = createAsyncThunk(
  'users/create',
  async (input: UserCreateInput) => {
    const service = new UserCreateService()
    return await service.execute(input)
  },
)

export const UserCreateSlice = createSlice({
  name: 'UserCreateSlice',
  initialState: userCreateInitialState,
  reducers: {
    setUserCreateModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload
    },
    setUserCreateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(userCreate.pending, (state) => {
        state.loading = true
      })
      .addCase(userCreate.fulfilled, (state) => {
        state.modal = false
        state.loading = false
        toastSuccess('Cadastrado com sucesso!')
      })
      .addCase(userCreate.rejected, (state) => {
        state.loading = false
        toastError('Erro ao cadastrar, tente novamente!')
      })
  },
})

export const { setUserCreateModal, setUserCreateLoading } =
  UserCreateSlice.actions

export default UserCreateSlice.reducer

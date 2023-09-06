import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastError, toastSuccess } from '../../../view/utils'
import { UserDeleteService } from '../../../../service'

export type UserDeleteState = {
  modal: boolean
  loading: boolean
  id: string
}

export const userDeleteInitialState: UserDeleteState = {
  modal: false,
  loading: false,
  id: '',
}

export const userDelete = createAsyncThunk(
  'users/delete',
  async (id: string) => {
    const service = new UserDeleteService()
    await service.execute(id)
  },
)

export const UserDeleteSlice = createSlice({
  name: 'UserDeleteSlice',
  initialState: userDeleteInitialState,
  reducers: {
    setUserDeleteModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload
    },
    setUserDeleteLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setUserDeleteId: (state, action: PayloadAction<string>) => {
      state.id = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(userDelete.pending, (state) => {
        state.loading = true
      })
      .addCase(userDelete.fulfilled, (state) => {
        state.modal = false
        state.loading = false
        toastSuccess('Excluido com sucesso!')
      })
      .addCase(userDelete.rejected, (state) => {
        state.loading = false
        toastError('Erro ao excluir, tente novamente!')
      })
  },
})

export const { setUserDeleteModal, setUserDeleteLoading, setUserDeleteId } =
  UserDeleteSlice.actions

export default UserDeleteSlice.reducer

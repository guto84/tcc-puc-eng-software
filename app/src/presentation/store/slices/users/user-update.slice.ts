import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastError, toastSuccess } from '../../../view/utils'
import {
  UserFindByIdService,
  UserRolesOutput,
  UserUpdateInput,
  UserUpdateService,
} from '../../../../service'

export type UserUpdateState = {
  modal: boolean
  loading: boolean
  values: UserRolesOutput
}

export const userUpdateInitialState: UserUpdateState = {
  modal: false,
  loading: false,
  values: {
    id: '',
    name: '',
    email: '',
    roles: [],
  },
}

type Props = {
  id: string
  input: UserUpdateInput
}

export const userFindById = createAsyncThunk(
  'users/findById',
  async (id: string) => {
    const service = new UserFindByIdService()
    const response = await service.execute(id)
    return response
  },
)

export const userUpdate = createAsyncThunk(
  'users/update',
  async ({ id, input }: Props) => {
    const service = new UserUpdateService()
    await service.execute(id, input)
  },
)

export const UserUpdateSlice = createSlice({
  name: 'UserUpdateSlice',
  initialState: userUpdateInitialState,
  reducers: {
    setUserUpdateModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload
    },
    setUserUpdateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(userFindById.pending, (state) => {
        state.loading = true
      })
      .addCase(userFindById.fulfilled, (state, action) => {
        state.values = action.payload
        state.loading = false
      })
      .addCase(userFindById.rejected, (state) => {
        state.loading = false
        toastError('Erro ao buscar dados, tente novamente!')
      })

      .addCase(userUpdate.pending, (state) => {
        state.loading = true
      })
      .addCase(userUpdate.fulfilled, (state) => {
        state.modal = false
        state.loading = false
        toastSuccess('Editado com sucesso!')
      })
      .addCase(userUpdate.rejected, (state) => {
        state.loading = false
        toastError('Erro ao editar, tente novamente!')
      })
  },
})

export const { setUserUpdateModal, setUserUpdateLoading } =
  UserUpdateSlice.actions

export default UserUpdateSlice.reducer

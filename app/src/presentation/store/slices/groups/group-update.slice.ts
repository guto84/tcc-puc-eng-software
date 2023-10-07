import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastError, toastSuccess } from '../../../view/utils'
import {
  GroupFindByIdService,
  GroupOutput,
  GroupUpdateInput,
  GroupUpdateService,
} from '../../../../service'

export type GroupUpdateState = {
  modal: boolean
  loading: boolean
  values: GroupOutput
}

export const groupUpdateInitialState: GroupUpdateState = {
  modal: false,
  loading: false,
  values: {
    id: '',
    name: '',
  },
}

type Props = {
  id: string
  input: GroupUpdateInput
}

export const groupFindById = createAsyncThunk(
  'groups/findById',
  async (id: string) => {
    const service = new GroupFindByIdService()
    const response = await service.execute(id)
    return response
  },
)

export const groupUpdate = createAsyncThunk(
  'groups/update',
  async ({ id, input }: Props) => {
    const service = new GroupUpdateService()
    await service.execute(id, input)
  },
)

export const GroupUpdateSlice = createSlice({
  name: 'GroupUpdateSlice',
  initialState: groupUpdateInitialState,
  reducers: {
    setGroupUpdateModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload
    },
    setGroupUpdateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(groupFindById.pending, (state) => {
        state.loading = true
      })
      .addCase(groupFindById.fulfilled, (state, action) => {
        state.values = action.payload
        state.loading = false
      })
      .addCase(groupFindById.rejected, (state) => {
        state.loading = false
        toastError('Erro ao buscar dados, tente novamente!')
      })

      .addCase(groupUpdate.pending, (state) => {
        state.loading = true
      })
      .addCase(groupUpdate.fulfilled, (state) => {
        state.modal = false
        state.loading = false
        toastSuccess('Editado com sucesso!')
      })
      .addCase(groupUpdate.rejected, (state) => {
        state.loading = false
        toastError('Erro ao editar, tente novamente!')
      })
  },
})

export const { setGroupUpdateModal, setGroupUpdateLoading } =
  GroupUpdateSlice.actions

export default GroupUpdateSlice.reducer

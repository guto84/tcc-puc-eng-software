import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastError, toastSuccess } from '../../../view/utils'
import { ConfigurationItemDeleteService } from '../../../../service'

export type ConfigurationItemDeleteState = {
  modal: boolean
  loading: boolean
  id: string
}

export const configurationItemDeleteInitialState: ConfigurationItemDeleteState =
  {
    modal: false,
    loading: false,
    id: '',
  }

export const configurationItemDelete = createAsyncThunk(
  'configurationItems/delete',
  async (id: string) => {
    const service = new ConfigurationItemDeleteService()
    await service.execute(id)
  },
)

export const ConfigurationItemDeleteSlice = createSlice({
  name: 'ConfigurationItemDeleteSlice',
  initialState: configurationItemDeleteInitialState,
  reducers: {
    setConfigurationItemDeleteModal: (
      state,
      action: PayloadAction<boolean>,
    ) => {
      state.modal = action.payload
    },
    setConfigurationItemDeleteLoading: (
      state,
      action: PayloadAction<boolean>,
    ) => {
      state.loading = action.payload
    },
    setConfigurationItemDeleteId: (state, action: PayloadAction<string>) => {
      state.id = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(configurationItemDelete.pending, (state) => {
        state.loading = true
      })
      .addCase(configurationItemDelete.fulfilled, (state) => {
        state.modal = false
        state.loading = false
        toastSuccess('Excluido com sucesso!')
      })
      .addCase(configurationItemDelete.rejected, (state) => {
        state.loading = false
        toastError('Erro ao excluir, tente novamente!')
      })
  },
})

export const {
  setConfigurationItemDeleteModal,
  setConfigurationItemDeleteLoading,
  setConfigurationItemDeleteId,
} = ConfigurationItemDeleteSlice.actions

export default ConfigurationItemDeleteSlice.reducer

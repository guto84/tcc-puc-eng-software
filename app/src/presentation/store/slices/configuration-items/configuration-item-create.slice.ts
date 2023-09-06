import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastError, toastSuccess } from '../../../view/utils'
import {
  ConfigurationItemCreateInput,
  ConfigurationItemCreateService,
} from '../../../../service'

export type ConfigurationItemCreateState = {
  modal: boolean
  loading: boolean
}

export const configurationItemCreateInitialState: ConfigurationItemCreateState =
  {
    modal: false,
    loading: false,
  }

export const configurationItemCreate = createAsyncThunk(
  'configurationItems/create',
  async (input: ConfigurationItemCreateInput) => {
    const service = new ConfigurationItemCreateService()
    await service.execute(input)
  },
)

export const ConfigurationItemCreateSlice = createSlice({
  name: 'ConfigurationItemCreateSlice',
  initialState: configurationItemCreateInitialState,
  reducers: {
    setConfigurationItemCreateModal: (
      state,
      action: PayloadAction<boolean>,
    ) => {
      state.modal = action.payload
    },
    setConfigurationItemCreateLoading: (
      state,
      action: PayloadAction<boolean>,
    ) => {
      state.loading = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(configurationItemCreate.pending, (state) => {
        state.loading = true
      })
      .addCase(configurationItemCreate.fulfilled, (state) => {
        state.modal = false
        state.loading = false
        toastSuccess('Cadastrado com sucesso!')
      })
      .addCase(configurationItemCreate.rejected, (state) => {
        state.loading = false
        toastError('Erro ao cadastrar, tente novamente!')
      })
  },
})

export const {
  setConfigurationItemCreateModal,
  setConfigurationItemCreateLoading,
} = ConfigurationItemCreateSlice.actions

export default ConfigurationItemCreateSlice.reducer

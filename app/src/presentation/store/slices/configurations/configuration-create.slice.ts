import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastError, toastSuccess } from '../../../view/utils'
import {
  ConfigurationCreateInput,
  ConfigurationCreateService,
} from '../../../../service'

export type ConfigurationCreateState = {
  modal: boolean
  loading: boolean
}

export const configurationCreateInitialState: ConfigurationCreateState = {
  modal: false,
  loading: false,
}

export const configurationCreate = createAsyncThunk(
  'configurations/create',
  async (input: ConfigurationCreateInput) => {
    const service = new ConfigurationCreateService()
    await service.execute(input)
  },
)

export const ConfigurationCreateSlice = createSlice({
  name: 'ConfigurationCreateSlice',
  initialState: configurationCreateInitialState,
  reducers: {
    setConfigurationCreateModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload
    },
    setConfigurationCreateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(configurationCreate.pending, (state) => {
        state.loading = true
      })
      .addCase(configurationCreate.fulfilled, (state) => {
        state.modal = false
        state.loading = false
        toastSuccess('Cadastrado com sucesso!')
      })
      .addCase(configurationCreate.rejected, (state) => {
        state.loading = false
        toastError('Erro ao cadastrar, tente novamente!')
      })
  },
})

export const { setConfigurationCreateModal, setConfigurationCreateLoading } =
  ConfigurationCreateSlice.actions

export default ConfigurationCreateSlice.reducer

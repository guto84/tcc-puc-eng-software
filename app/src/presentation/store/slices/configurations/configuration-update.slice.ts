import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastError, toastSuccess } from '../../../view/utils'
import {
  ConfigurationFindByIdService,
  ConfigurationOutput,
  ConfigurationUpdateInput,
  ConfigurationUpdateService,
} from '../../../../service'

export type ConfigurationUpdateState = {
  modal: boolean
  loading: boolean
  values: ConfigurationOutput
}

export const configurationUpdateInitialState: ConfigurationUpdateState = {
  modal: false,
  loading: false,
  values: {
    id: '',
    name: '',
    minimum: 0,
    maximum: 0,
    category: {
      id: '',
    },
  },
}

type Props = {
  id: string
  input: ConfigurationUpdateInput
}

export const configurationFindById = createAsyncThunk(
  'configurations/findById',
  async (id: string) => {
    const service = new ConfigurationFindByIdService()
    const response = await service.execute(id)
    return response
  },
)

export const configurationUpdate = createAsyncThunk(
  'configurations/update',
  async ({ id, input }: Props) => {
    const service = new ConfigurationUpdateService()
    await service.execute(id, input)
  },
)

export const ConfigurationUpdateSlice = createSlice({
  name: 'ConfigurationUpdateSlice',
  initialState: configurationUpdateInitialState,
  reducers: {
    setConfigurationUpdateModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload
    },
    setConfigurationUpdateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(configurationFindById.pending, (state) => {
        state.loading = true
      })
      .addCase(configurationFindById.fulfilled, (state, action) => {
        state.values = action.payload
        state.loading = false
      })
      .addCase(configurationFindById.rejected, (state) => {
        state.loading = false
        toastError('Erro ao buscar dados, tente novamente!')
      })

      .addCase(configurationUpdate.pending, (state) => {
        state.loading = true
      })
      .addCase(configurationUpdate.fulfilled, (state) => {
        state.modal = false
        state.loading = false
        toastSuccess('Editado com sucesso!')
      })
      .addCase(configurationUpdate.rejected, (state) => {
        state.loading = false
        toastError('Erro ao editar, tente novamente!')
      })
  },
})

export const { setConfigurationUpdateModal, setConfigurationUpdateLoading } =
  ConfigurationUpdateSlice.actions

export default ConfigurationUpdateSlice.reducer

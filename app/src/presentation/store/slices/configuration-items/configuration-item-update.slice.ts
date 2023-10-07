import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastError, toastSuccess } from '../../../view/utils'
import {
  ConfigurationItemFindByIdService,
  ConfigurationItemOutput,
  ConfigurationItemUpdateInput,
  ConfigurationItemUpdateService,
} from '../../../../service'

export type ConfigurationItemUpdateState = {
  modal: boolean
  loading: boolean
  values: ConfigurationItemOutput
}

export const configurationItemUpdateInitialState: ConfigurationItemUpdateState =
  {
    modal: false,
    loading: false,
    values: {
      id: '',
      name: '',
      description: '',
      price: 0,
      configuration: {
        id: '',
      },
    },
  }

type Props = {
  id: string
  input: ConfigurationItemUpdateInput
}

export const configurationItemFindById = createAsyncThunk(
  'configurationItems/findById',
  async (id: string) => {
    const service = new ConfigurationItemFindByIdService()
    const response = await service.execute(id)
    return response
  },
)

export const configurationItemUpdate = createAsyncThunk(
  'configurationItems/update',
  async ({ id, input }: Props) => {
    const service = new ConfigurationItemUpdateService()
    await service.execute(id, input)
  },
)

export const ConfigurationItemUpdateSlice = createSlice({
  name: 'ConfigurationItemUpdateSlice',
  initialState: configurationItemUpdateInitialState,
  reducers: {
    setConfigurationItemUpdateModal: (
      state,
      action: PayloadAction<boolean>,
    ) => {
      state.modal = action.payload
    },
    setConfigurationItemUpdateLoading: (
      state,
      action: PayloadAction<boolean>,
    ) => {
      state.loading = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(configurationItemFindById.pending, (state) => {
        state.loading = true
      })
      .addCase(configurationItemFindById.fulfilled, (state, action) => {
        state.values = action.payload
        state.loading = false
      })
      .addCase(configurationItemFindById.rejected, (state) => {
        state.loading = false
        toastError('Erro ao buscar dados, tente novamente!')
      })

      .addCase(configurationItemUpdate.pending, (state) => {
        state.loading = true
      })
      .addCase(configurationItemUpdate.fulfilled, (state) => {
        state.modal = false
        state.loading = false
        toastSuccess('Editado com sucesso!')
      })
      .addCase(configurationItemUpdate.rejected, (state) => {
        state.loading = false
        toastError('Erro ao editar, tente novamente!')
      })
  },
})

export const {
  setConfigurationItemUpdateModal,
  setConfigurationItemUpdateLoading,
} = ConfigurationItemUpdateSlice.actions

export default ConfigurationItemUpdateSlice.reducer

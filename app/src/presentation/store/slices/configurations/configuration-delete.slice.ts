import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastError, toastSuccess } from '../../../view/utils'
import { ConfigurationDeleteService } from '../../../../service'

export type ConfigurationDeleteState = {
  modal: boolean
  loading: boolean
  id: string
}

export const configurationDeleteInitialState: ConfigurationDeleteState = {
  modal: false,
  loading: false,
  id: '',
}

export const configurationDelete = createAsyncThunk(
  'configurations/delete',
  async (id: string) => {
    const service = new ConfigurationDeleteService()
    await service.execute(id)
  },
)

export const ConfigurationDeleteSlice = createSlice({
  name: 'ConfigurationDeleteSlice',
  initialState: configurationDeleteInitialState,
  reducers: {
    setConfigurationDeleteModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload
    },
    setConfigurationDeleteLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setConfigurationDeleteId: (state, action: PayloadAction<string>) => {
      state.id = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(configurationDelete.pending, (state) => {
        state.loading = true
      })
      .addCase(configurationDelete.fulfilled, (state) => {
        state.modal = false
        state.loading = false
        toastSuccess('Excluido com sucesso!')
      })
      .addCase(configurationDelete.rejected, (state) => {
        state.loading = false
        toastError('Erro ao excluir, tente novamente!')
      })
  },
})

export const {
  setConfigurationDeleteModal,
  setConfigurationDeleteLoading,
  setConfigurationDeleteId,
} = ConfigurationDeleteSlice.actions

export default ConfigurationDeleteSlice.reducer

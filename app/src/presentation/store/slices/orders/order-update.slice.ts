import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastError, toastSuccess } from '../../../view/utils'
import { OrderUpdateInput, OrderUpdateService } from '../../../../service'

export type OrderUpdateState = {
  loading: boolean
}

export const orderUpdateInitialState: OrderUpdateState = {
  loading: false,
}

type Props = {
  id: string
  input: OrderUpdateInput
}

export const orderUpdate = createAsyncThunk(
  'orders/update',
  async ({ id, input }: Props) => {
    const service = new OrderUpdateService()
    await service.execute(id, input)
  },
)

export const OrderUpdateSlice = createSlice({
  name: 'OrderUpdateSlice',
  initialState: orderUpdateInitialState,
  reducers: {
    setOrderUpdateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(orderUpdate.pending, (state) => {
        state.loading = true
      })
      .addCase(orderUpdate.fulfilled, (state) => {
        state.loading = false
        toastSuccess('Status alterado sucesso!')
      })
      .addCase(orderUpdate.rejected, (state) => {
        state.loading = false
        toastError('Erro ao editar, tente novamente!')
      })
  },
})

export const { setOrderUpdateLoading } = OrderUpdateSlice.actions

export default OrderUpdateSlice.reducer

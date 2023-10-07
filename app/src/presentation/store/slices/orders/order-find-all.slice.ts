import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { OrderFindAllService, OrderOutput } from '../../../../service'
import { toastError } from '../../../view/utils'

export type OrderFindAllState = {
  loading: boolean
  list: OrderOutput[]
  totalPages: number
  totalElements: number
  offset: number
  page: number
}

export const orderFindAllInitialState: OrderFindAllState = {
  loading: true,
  list: [],
  totalPages: 0,
  totalElements: 0,
  offset: 10,
  page: 1,
}

export const orderFindAll = createAsyncThunk(
  'orders/findAll',
  async (page: number) => {
    const service = new OrderFindAllService()
    const response = await service.execute(page)
    return response
  },
)

export const OrderFindAllSlice = createSlice({
  name: 'OrderFindAllSlice',
  initialState: orderFindAllInitialState,
  reducers: {
    setOrderList: (state, action: PayloadAction<OrderOutput[]>) => {
      state.list = action.payload
    },
    setOrderListLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setOrderTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload
    },
    setOrderTotalElements: (state, action: PayloadAction<number>) => {
      state.totalElements = action.payload
    },
    setOrderOffset: (state, action: PayloadAction<number>) => {
      state.offset = action.payload
    },
    setOrderPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(orderFindAll.pending, (state) => {
        state.loading = true
      })
      .addCase(orderFindAll.fulfilled, (state, action) => {
        state.list = action.payload.content
        state.totalPages = action.payload.totalPages
        state.totalElements = action.payload.totalElements
        state.offset = action.payload.offset
        state.page = action.payload.page
        state.loading = false
      })
      .addCase(orderFindAll.rejected, (state) => {
        state.loading = false
        toastError('Erro ao buscar dados, tente novamente!')
      })
  },
})

export const {
  setOrderList,
  setOrderListLoading,
  setOrderTotalPages,
  setOrderTotalElements,
  setOrderOffset,
  setOrderPage,
} = OrderFindAllSlice.actions

export default OrderFindAllSlice.reducer

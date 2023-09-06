import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  OrderFindByIdService,
  OrderItemsOutput,
  StatusEnum,
} from '../../../../service'
import { toastError } from '../../../view/utils'

export type OrderFindByIdState = {
  order: OrderItemsOutput
  id: string
  loading: boolean
  modal: boolean
}

export const orderFindByIdInitialState: OrderFindByIdState = {
  id: '',
  loading: false,
  modal: false,
  order: {
    id: '',
    name: '',
    address: '',
    addressNumber: '',
    addressComplement: '',
    district: '',
    zipcode: '',
    phone: '',
    status: StatusEnum.RECEIVED,
    createdAt: new Date(),
    total: 0,
    orderItems: [
      {
        id: '',
        quantity: 0,
        subTotal: 0,
        product: {
          id: '',
          name: '',
          description: '',
          price: 0,
        },
        orderConfigurations: [
          {
            quantity: 1,
            subTotal: 0,
            configurationItem: {
              id: '',
              name: '',
              description: '',
              price: 0,
            },
          },
        ],
      },
    ],
  },
}

export const orderFindById = createAsyncThunk(
  'orders/findById',
  async (id: string) => {
    const service = new OrderFindByIdService()
    const response = await service.execute(id)
    return response
  },
)

export const OrderFindByIdSlice = createSlice({
  name: 'OrderFindByIdSlice',
  initialState: orderFindByIdInitialState,
  reducers: {
    setOrderShow: (state, action: PayloadAction<OrderItemsOutput>) => {
      state.order = action.payload
    },
    setOrderShowId: (state, action: PayloadAction<string>) => {
      state.id = action.payload
    },
    setOrderShowLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setOrderShowModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(orderFindById.pending, (state) => {
        state.loading = true
      })
      .addCase(orderFindById.fulfilled, (state, action) => {
        state.order = action.payload
        state.loading = false
      })
      .addCase(orderFindById.rejected, (state) => {
        state.loading = false
        toastError('Erro ao buscar dados, tente novamente!')
      })
  },
})

export const {
  setOrderShow,
  setOrderShowId,
  setOrderShowLoading,
  setOrderShowModal,
} = OrderFindByIdSlice.actions

export default OrderFindByIdSlice.reducer

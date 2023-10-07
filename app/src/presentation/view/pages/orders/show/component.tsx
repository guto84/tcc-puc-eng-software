import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Modal,
  Select,
  Typography,
} from '@mui/material'
import {
  ExpandMore as ExpandMoreIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material'
import { Close as CloseIcon } from '@mui/icons-material'
import { DetailItem, Loading, ModalCard } from '../../../components'
import {
  OrderItemsOutput,
  OrderUpdateInput,
  StatusEnum,
} from '../../../../../service'
import { TreeItem, TreeView } from '@mui/lab'
import { brlFormat, phoneMask, zipcodeMask } from '../../../utils'

type Props = {
  order: OrderItemsOutput
  modal: boolean
  loading: boolean
  handleModal: (value: boolean) => void
  handleOrderUpdate: (id: string, input: OrderUpdateInput) => Promise<void>
}

export const Component = ({
  order,
  modal,
  loading,
  handleModal,
  handleOrderUpdate,
}: Props) => {
  const initialValues = {
    name: order.name,
    address: order.address,
    addressNumber: order.addressNumber,
    district: order.district,
    zipcode: order.zipcode,
    phone: order.phone,
    status: order.status,
  }
  const validationSchema = Yup.object().shape({
    status: Yup.string().required('Campo obrigatório'),
  })

  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (input) => {
      await handleOrderUpdate(order.id, input)
      handleModal(false)
    },
    enableReinitialize: true,
  })

  return (
    <>
      <Modal
        open={modal}
        onClose={() => handleModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <ModalCard>
            <Card>
              <CardHeader
                title="Detalhes do Pedido"
                action={
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                    onClick={() => handleModal(false)}
                  >
                    <CloseIcon />
                  </IconButton>
                }
              />

              <Divider />

              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Dados pessoais
                </Typography>
                <DetailItem label="Nome" value={order.name} />
                <DetailItem label="Telefone" value={phoneMask(order.phone)} />
              </CardContent>

              <Divider />

              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Endereço
                </Typography>
                <DetailItem
                  label="Logradouro"
                  value={`${order.address}, ${order.addressNumber}`}
                />
                {order.addressComplement && (
                  <DetailItem
                    label="Complemento"
                    value={order.addressComplement || ''}
                  />
                )}
                <DetailItem label="Bairro" value={order.district} />
                <DetailItem label="CEP" value={zipcodeMask(order.zipcode)} />
              </CardContent>

              <Divider />

              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Pedido
                </Typography>
                <DetailItem label="Total" value={brlFormat(order.total)} />
                <TreeView
                  aria-label="file system navigator"
                  defaultCollapseIcon={<ExpandMoreIcon />}
                  defaultExpandIcon={<ChevronRightIcon />}
                >
                  {order.orderItems.map((item) => (
                    <TreeItem
                      key={item.id}
                      nodeId={item.id}
                      label={
                        <strong>
                          {item.quantity}x - {item.product.name} ={' '}
                          {brlFormat(item.subTotal)}
                        </strong>
                      }
                    >
                      {item.orderConfigurations.map((config) => (
                        <TreeItem
                          key={config.configurationItem.id}
                          nodeId={config.configurationItem.id}
                          label={`${config.quantity}x - ${config.configurationItem.name}`}
                        />
                      ))}
                    </TreeItem>
                  ))}
                </TreeView>
              </CardContent>

              <Divider />

              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Status
                </Typography>
                <form onSubmit={form.handleSubmit}>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}
                  >
                    <Grid item xs={12}>
                      <FormControl variant="standard" fullWidth>
                        <Select
                          name="status"
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={form.values.status}
                          onChange={form.handleChange}
                          label="Status"
                        >
                          <MenuItem value={StatusEnum.RECEIVED}>
                            Recebido
                          </MenuItem>
                          <MenuItem value={StatusEnum.IN_PREPARATION}>
                            Em Preparação
                          </MenuItem>
                          <MenuItem value={StatusEnum.READY}>Pronto</MenuItem>
                          <MenuItem value={StatusEnum.OUT_FOR_DELIVERY}>
                            Saiu para entrega
                          </MenuItem>
                          <MenuItem value={StatusEnum.DELIVERED}>
                            Entregue
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" fullWidth>
                        Alterar Status
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </ModalCard>
        </>
      </Modal>

      <Loading loading={loading} />
    </>
  )
}

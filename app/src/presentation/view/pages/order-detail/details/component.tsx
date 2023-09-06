import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material'
import {
  ExpandMore as ExpandMoreIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material'
import { DetailItem, Loading, Template } from '../../../components'
import { OrderItemsOutput } from '../../../../../service'
import { TreeItem, TreeView } from '@mui/lab'
import { brlFormat, phoneMask, zipcodeMask } from '../../../utils'

type Props = {
  order: OrderItemsOutput
  loading: boolean
}

export const Component = ({ order, loading }: Props) => {
  const status = {
    RECEIVED: 'Recebido',
    IN_PREPARATION: 'Em Preparação',
    READY: 'Pronto',
    OUT_FOR_DELIVERY: 'Saiu para entrega',
    DELIVERED: 'Entregue',
  }

  return (
    <>
      <Template>
        <Card>
          <CardHeader title={`Meu Pedido: # ${order.id}`} />
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
              Status: {status[order.status]}
            </Typography>
          </CardContent>
        </Card>
      </Template>

      <Loading loading={loading} />
    </>
  )
}

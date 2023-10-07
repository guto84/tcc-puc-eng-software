import dayjs from 'dayjs'
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from '@mui/material'
import { Visibility as VisibilityIcon } from '@mui/icons-material'
import { Loading, TemplateAdmin } from '../../../components'
import { OrderOutput } from '../../../../../service'

type Props = {
  list: OrderOutput[]
  loading: boolean
  totalPages: number
  page: number
  handlePage: (value: number) => void
  handleShow: (value: string) => void
}

export const Component = ({
  list,
  loading,
  totalPages,
  page,
  handlePage,
  handleShow,
}: Props) => {
  const status = {
    RECEIVED: 'Recebido',
    IN_PREPARATION: 'Em Preparação',
    READY: 'Pronto',
    OUT_FOR_DELIVERY: 'Saiu para Entrega',
    DELIVERED: 'Entregue',
  }

  return (
    <>
      <TemplateAdmin currentBreadcrumb="Pedidos">
        <Card>
          <CardHeader title="Pedidos" />
          <TableContainer component={CardContent}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>NOME</TableCell>
                  <TableCell>TELEFONE</TableCell>
                  <TableCell>DATA / HORA</TableCell>
                  <TableCell>STATUS</TableCell>
                  <TableCell align="center" width={50}>
                    AÇÕES
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.name}</TableCell>
                    <TableCell>{order.phone}</TableCell>
                    <TableCell>
                      {dayjs(order.createdAt).format('DD/MM/YY - HH:mm')}
                    </TableCell>
                    <TableCell>{status[order.status]}</TableCell>
                    <TableCell>
                      <Tooltip title="Detalhes">
                        <IconButton
                          color="primary"
                          component="button"
                          onClick={() => handleShow(order.id)}
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <CardContent>
            <Pagination
              count={totalPages}
              page={page + 1}
              onChange={(_event, page) => handlePage(page)}
            />
          </CardContent>
        </Card>
      </TemplateAdmin>

      <Loading loading={loading} />
    </>
  )
}

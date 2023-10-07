import {
  CardHeader,
  CardContent,
  Button,
  TableHead,
  TableRow,
  TableContainer,
  Table,
  TableCell,
  TableBody,
  IconButton,
  Tooltip,
  Card,
} from '@mui/material'
import {
  DeleteForever as DeleteForeverIcon,
  Edit as EditIcon,
  PersonAdd as PersonAddIcon,
} from '@mui/icons-material'
import { Loading, TemplateAdmin, Toast } from '../../../components'
import { Link } from 'react-router-dom'
import { CompanyOutput } from '../../../../../service'

type Props = {
  list: CompanyOutput[]
  loading: boolean
  handleCreateModal: (open: boolean) => void
  handleUpdateModal: (id: string) => void
  handleDeleteModal: (id: string) => void
}

export const Component = ({
  list,
  loading,
  handleCreateModal,
  handleUpdateModal,
  handleDeleteModal,
}: Props) => {
  return (
    <>
      <TemplateAdmin currentBreadcrumb="Empresas">
        <Card>
          <CardHeader
            title="Empresas"
            action={
              <Button
                variant="contained"
                onClick={() => handleCreateModal(true)}
              >
                Cadastrar
              </Button>
            }
          />
          <TableContainer component={CardContent}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>NOME</TableCell>
                  <TableCell>URL</TableCell>
                  <TableCell align="center" width={160}>
                    AÇÕES
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.url}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Editar">
                        <IconButton
                          color="primary"
                          component="button"
                          onClick={() => handleUpdateModal(row.id)}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Excluir">
                        <IconButton
                          color="error"
                          component="button"
                          onClick={() => handleDeleteModal(row.id)}
                        >
                          <DeleteForeverIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Usuários">
                        <Link to={`/empresas/${row.id}/usuarios`}>
                          <IconButton color="success" component="button">
                            <PersonAddIcon />
                          </IconButton>
                        </Link>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </TemplateAdmin>

      <Loading loading={loading} />
      <Toast />
    </>
  )
}

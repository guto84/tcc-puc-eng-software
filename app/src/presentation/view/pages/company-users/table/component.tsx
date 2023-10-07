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
} from '@mui/icons-material'
import { Loading, TemplateAdmin, Toast } from '../../../components'
import { CompanyUsersOutput } from '../../../../../service'

type Props = {
  company: CompanyUsersOutput
  loading: boolean
  handleCreateModal: (open: boolean) => void
  handleUpdateModal: (id: string) => void
  handleDeleteModal: (id: string) => void
}

export const Component = ({
  company,
  loading,
  handleCreateModal,
  handleUpdateModal,
  handleDeleteModal,
}: Props) => {
  return (
    <>
      <TemplateAdmin
        listBreadcrumb={[{ to: '/empresas', text: 'Empresas' }]}
        currentBreadcrumb="Usuários"
      >
        <Card sx={{ marginBottom: '48px' }}>
          <CardHeader title="Empresa" />
          <TableContainer component={CardContent}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>NOME</TableCell>
                  <TableCell>URL</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{company.name}</TableCell>
                  <TableCell>{company.url}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
        <Card>
          <CardHeader
            title="Usuários"
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
                  <TableCell>EMAIL</TableCell>
                  <TableCell align="center" width={120}>
                    AÇÕES
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {company.users.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
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

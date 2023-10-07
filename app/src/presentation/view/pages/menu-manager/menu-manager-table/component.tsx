import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material'
import {
  DeleteForever as DeleteForeverIcon,
  Edit as EditIcon,
  PlaylistAdd as PlaylistAddIcon,
  PostAdd as PostAddIcon,
  Fastfood as FastfoodIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from '@mui/icons-material'
import { TemplateAdmin } from '../../../components'
import { GroupCategoriesProductsOutput } from '../../../../../service'
import * as S from './styles'

type Props = {
  list: GroupCategoriesProductsOutput[]
  handleGroupCreateModal: (open: boolean) => void
  handleGroupDeleteModal: (id: string) => void
  handleGroupUpdateModal: (id: string) => void
  handleCategoryCreateModal: (open: boolean, id: string) => void
  handleCategoryDeleteModal: (id: string) => void
  handleCategoryUpdateModal: (id: string) => void
  handleProductCreateModal: (open: boolean, id: string) => void
  handleProductUpdateModal: (id: string) => void
  handleProductDeleteModal: (id: string) => void
}

const Row = ({
  group,
  handleGroupDeleteModal,
  handleGroupUpdateModal,
  handleCategoryCreateModal,
  handleCategoryDeleteModal,
  handleCategoryUpdateModal,
  handleProductCreateModal,
  handleProductUpdateModal,
  handleProductDeleteModal,
}: any) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <TableRow sx={{ backgroundColor: '#e0e0e0' }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontSize: '18px', fontWeight: 'bold' }}>
          {group.name}
        </TableCell>
        <TableCell>
          <ButtonGroup>
            <Tooltip title="Editar">
              <IconButton
                onClick={() => handleGroupUpdateModal(group.id)}
                color="primary"
                component="button"
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Excluir">
              <IconButton
                onClick={() => handleGroupDeleteModal(group.id)}
                color="error"
                component="button"
              >
                <DeleteForeverIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Cadastrar Categoria">
              <IconButton
                onClick={() => handleCategoryCreateModal(true, group.id)}
                color="success"
                component="button"
              >
                <PlaylistAddIcon />
              </IconButton>
            </Tooltip>
          </ButtonGroup>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={3}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {group.categories.map((category: any) => (
              <TableContainer key={category.id} component={CardContent}>
                <S.CategoryItem>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {category.name}
                  </Typography>
                  <ButtonGroup>
                    <Tooltip title="Editar">
                      <IconButton
                        onClick={() => handleCategoryUpdateModal(category.id)}
                        color="primary"
                        component="button"
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Excluir">
                      <IconButton
                        onClick={() => handleCategoryDeleteModal(category.id)}
                        color="error"
                        component="button"
                      >
                        <DeleteForeverIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Cadastrar Produto">
                      <IconButton
                        onClick={() =>
                          handleProductCreateModal(true, category.id)
                        }
                        color="success"
                        component="button"
                      >
                        <FastfoodIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Configurações">
                      <Link
                        to={`/cardapios/categorias/${category.id}/configuracoes`}
                      >
                        <IconButton color="success" component="button">
                          <PostAddIcon />
                        </IconButton>
                      </Link>
                    </Tooltip>
                  </ButtonGroup>
                </S.CategoryItem>
                <Divider />
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell width={450}>NOME</TableCell>
                      <TableCell>DESCRIÇÃO</TableCell>
                      <TableCell width={120}>PREÇO</TableCell>
                      <TableCell align="center" width={100}>
                        AÇÕES
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {category.products.map((product: any) => (
                      <TableRow key={product.id}>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.description}</TableCell>
                        <TableCell>
                          {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          }).format(product.price)}
                        </TableCell>
                        <TableCell align="center">
                          <ButtonGroup>
                            <Tooltip title="Editar">
                              <IconButton
                                onClick={() =>
                                  handleProductUpdateModal(product.id)
                                }
                                color="primary"
                                component="button"
                              >
                                <EditIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Excluir">
                              <IconButton
                                onClick={() =>
                                  handleProductDeleteModal(product.id)
                                }
                                color="error"
                                component="button"
                              >
                                <DeleteForeverIcon />
                              </IconButton>
                            </Tooltip>
                          </ButtonGroup>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ))}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export const Component = ({
  list,
  handleGroupCreateModal,
  handleGroupDeleteModal,
  handleGroupUpdateModal,
  handleCategoryCreateModal,
  handleCategoryDeleteModal,
  handleCategoryUpdateModal,
  handleProductCreateModal,
  handleProductUpdateModal,
  handleProductDeleteModal,
}: Props) => {
  return (
    <>
      <TemplateAdmin currentBreadcrumb="Cardápio">
        <Card>
          <CardHeader
            title="Cardápio"
            action={
              <Tooltip title="Cadastrar Grupo">
                <IconButton
                  color="success"
                  component="button"
                  onClick={() => handleGroupCreateModal(true)}
                >
                  <PlaylistAddIcon />
                </IconButton>
              </Tooltip>
            }
          />

          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell width={30} />
                  <TableCell>GRUPO</TableCell>
                  <TableCell align="center" width={100}>
                    AÇÕES
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list.map((group) => (
                  <Row
                    key={group.id}
                    group={group}
                    handleGroupDeleteModal={handleGroupDeleteModal}
                    handleGroupUpdateModal={handleGroupUpdateModal}
                    handleCategoryCreateModal={handleCategoryCreateModal}
                    handleCategoryDeleteModal={handleCategoryDeleteModal}
                    handleCategoryUpdateModal={handleCategoryUpdateModal}
                    handleProductCreateModal={handleProductCreateModal}
                    handleProductUpdateModal={handleProductUpdateModal}
                    handleProductDeleteModal={handleProductDeleteModal}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </TemplateAdmin>
    </>
  )
}

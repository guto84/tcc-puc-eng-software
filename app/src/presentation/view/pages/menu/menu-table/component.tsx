import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
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
  Typography,
} from '@mui/material'
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from '@mui/icons-material'
import { Template } from '../../../components'
import { CompanyMenuOutput } from '../../../../../service'
import * as S from './styles'

type Props = {
  menu: CompanyMenuOutput
}

const Row = ({ group }: any) => {
  const navigate = useNavigate()
  const params = useParams()
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
                </S.CategoryItem>
                <Divider />
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell width={450}>NOME</TableCell>
                      <TableCell>DESCRIÇÃO</TableCell>
                      <TableCell width={120}>PREÇO</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {category.products.map((product: any) => (
                      <TableRow
                        key={product.id}
                        hover
                        sx={{ cursor: 'pointer' }}
                        onClick={() =>
                          navigate(`/${params.url}/produtos/${product.id}`)
                        }
                      >
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.description}</TableCell>
                        <TableCell>
                          {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          }).format(product.price)}
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

export const Component = ({ menu }: Props) => {
  return (
    <>
      <Template>
        <Card>
          <CardHeader title={menu.name} />
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell width={30} />
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {menu.groups.map((group) => (
                  <Row key={group.id} group={group} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Template>
    </>
  )
}

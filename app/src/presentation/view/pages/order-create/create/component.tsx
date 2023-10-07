import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material'
import {
  Add as AddIcon,
  ArrowBack as ArrowBackIcon,
  Remove as RemoveIcon,
  // Delete as DeleteIcon,
} from '@mui/icons-material'
import { Template } from '../../../components'
import * as S from './styles'

type Props = {
  handleBack: () => void
}

export const Component = ({ handleBack }: Props) => (
  <Template>
    <Card>
      <CardHeader
        sx={{ borderBottom: '1px solid #e0e0e0' }}
        title={
          <S.Header>
            <IconButton aria-label="primary" onClick={handleBack}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h5">Fazer pedido</Typography>
          </S.Header>
        }
      />
      <CardContent>
        <S.OrderItem>
          <div>
            <div>X-Burguer</div>
            <List dense={true}>
              <ListItem sx={{ fontSize: '14px' }}>
                Hamburguer, Queijo e Tomate
              </ListItem>
              <ListItem sx={{ fontSize: '14px' }}>Pão de Hamburguer</ListItem>
              <ListItem>R$ 16,00</ListItem>
            </List>
          </div>
          <S.ActionAmount>
            <IconButton aria-label="primary" onClick={handleBack}>
              <RemoveIcon />
            </IconButton>
            <S.Amount>{1}</S.Amount>
            <IconButton aria-label="primary" onClick={handleBack}>
              <AddIcon />
            </IconButton>
          </S.ActionAmount>
        </S.OrderItem>
        <Divider />
        <S.OrderItem>
          <div>
            <div>Coca-Cola</div>
            <List dense={true}>
              <ListItem sx={{ fontSize: '14px' }}>Lata 350 ml</ListItem>
              <ListItem>R$ 5,00</ListItem>
            </List>
          </div>
          <S.ActionAmount>
            <IconButton aria-label="primary">
              <RemoveIcon />
            </IconButton>
            <S.Amount>{1}</S.Amount>
            <IconButton aria-label="primary">
              <AddIcon />
            </IconButton>
          </S.ActionAmount>
        </S.OrderItem>
        <Divider />
        <Typography sx={{ padding: '15px 0' }} variant="h6">
          Total do Pedido: R$ 20,00
        </Typography>
        <Divider />
      </CardContent>
    </Card>

    <Card sx={{ marginTop: '30px' }}>
      <CardHeader title="Seus Dados" />
      <Divider />
      <CardContent>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              label="Nome"
              variant="standard"
              fullWidth
              name="name"
              // value={form.values.name}
              // onChange={form.handleChange}
              // error={!!(form.touched.name && form.errors.name)}
              // helperText={form.errors.name}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Logradouro"
              variant="standard"
              fullWidth
              name="address"
              // value={form.values.name}
              // onChange={form.handleChange}
              // error={!!(form.touched.name && form.errors.name)}
              // helperText={form.errors.name}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Numero"
              variant="standard"
              fullWidth
              name="addressNumber"
              // value={form.values.name}
              // onChange={form.handleChange}
              // error={!!(form.touched.name && form.errors.name)}
              // helperText={form.errors.name}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Complemento"
              variant="standard"
              fullWidth
              name="addressComplement"
              // value={form.values.name}
              // onChange={form.handleChange}
              // error={!!(form.touched.name && form.errors.name)}
              // helperText={form.errors.name}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Bairro"
              variant="standard"
              fullWidth
              name="district"
              // value={form.values.name}
              // onChange={form.handleChange}
              // error={!!(form.touched.name && form.errors.name)}
              // helperText={form.errors.name}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="CEP"
              variant="standard"
              fullWidth
              name="zipcode"
              // value={form.values.name}
              // onChange={form.handleChange}
              // error={!!(form.touched.name && form.errors.name)}
              // helperText={form.errors.name}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Telefone"
              variant="standard"
              fullWidth
              name="phone"
              // value={form.values.name}
              // onChange={form.handleChange}
              // error={!!(form.touched.name && form.errors.name)}
              // helperText={form.errors.name}
            />
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined" fullWidth onClick={handleBack}>
              Continuar Comprando
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button type="submit" variant="contained" fullWidth>
              Finalizar
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </Template>
)

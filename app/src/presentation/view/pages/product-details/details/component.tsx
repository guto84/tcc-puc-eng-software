import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  List,
  ListItem,
  Paper,
  Typography,
} from '@mui/material'
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material'
import { Template } from '../../../components'
import { ProductConfigsItemsOutput } from '../../../../../service'
import * as S from './styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'

type Props = {
  product: ProductConfigsItemsOutput
  handleBack: () => void
}

export const Component = ({ product, handleBack }: Props) => {
  const configurations: { [key: string]: string[] } = {}
  const configurationsValues: { [key: string]: string[] } = {}
  product.category.configurations.map((item) => {
    configurations[item.id] = []
    configurationsValues[item.id] = []
  })

  const initialValues: any = configurationsValues
  initialValues.quantity = 1
  initialValues.product = {
    id: product.id,
  }

  const validation: any = {}
  product.category.configurations.map((item) => {
    validation[item.id] = Yup.array()
      .min(item.minimum, `Selecione pelo menos ${item.minimum} opcões`)
      .max(item.maximum, `Selecione até ${item.maximum} opcões`)
      .of(Yup.string().required())
      .required()
  })

  const validationSchema = Yup.object().shape(validation)

  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      console.log(values)
    },
    enableReinitialize: true,
  })

  return (
    <Template>
      <Card>
        <CardHeader
          title={
            <IconButton aria-label="primary" onClick={handleBack}>
              <ArrowBackIcon />
            </IconButton>
          }
        />
        <CardContent component={Paper}>
          <Typography variant="h6" sx={{ padding: '0 15px' }}>
            {product.name}
          </Typography>
          <List>
            <ListItem>{product.description}</ListItem>
            <ListItem>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(product.price)}
            </ListItem>
          </List>
          <form onSubmit={form.handleSubmit}>
            {product.category.configurations.map((config) => (
              <>
                <S.ConfigurationHeader key={config.id}>
                  <div>
                    <Typography variant="subtitle1">{config.name}</Typography>
                    {!(form.touched[config.id] && form.errors[config.id]) && (
                      <Typography variant="subtitle2">{`Selecione ${
                        config.maximum > 1 ? 'até' : ''
                      } ${config.maximum} ite${
                        config.maximum === 1 ? 'm' : 'ns'
                      }`}</Typography>
                    )}
                    {!!(form.touched[config.id] && form.errors[config.id]) && (
                      <Typography
                        variant="subtitle2"
                        sx={{ color: 'red', fontWeight: 'bold' }}
                      >{`${form.errors[config.id]}`}</Typography>
                    )}
                  </div>
                  {config.minimum > 0 && (
                    <S.RequiredLabel>OBRIGATÓRIO</S.RequiredLabel>
                  )}
                </S.ConfigurationHeader>
                {config.configurationItems.map((item) => (
                  <FormGroup sx={{ padding: '10px 15px' }} key={item.id}>
                    <FormControlLabel
                      sx={{ borderBottom: '1px solid #e0e0e0' }}
                      control={<Checkbox />}
                      name={config.id}
                      value={item.id}
                      onChange={form.handleChange}
                      label={
                        <S.CheckboxLabel>
                          <S.CheckboxLabelTitle>
                            {item.name}
                          </S.CheckboxLabelTitle>
                          <S.CheckboxLabelDescription>
                            {item.description}
                          </S.CheckboxLabelDescription>
                          <S.CheckboxLabelPrice>
                            {new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            }).format(item.price)}
                          </S.CheckboxLabelPrice>
                        </S.CheckboxLabel>
                      }
                    />
                  </FormGroup>
                ))}
              </>
            ))}
            <Button type="submit" variant="contained" fullWidth>
              Adicionar
            </Button>
          </form>
        </CardContent>
      </Card>
    </Template>
  )
}

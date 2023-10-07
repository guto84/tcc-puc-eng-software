import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Modal,
  TextField,
} from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import { Loading, ModalCard } from '../../../components'
import { ProductOutput, ProductUpdateInput } from '../../../../../service'

type Props = {
  open: boolean
  loading: boolean
  values: ProductOutput
  handleOpen: (open: boolean) => void
  handleUpdate: (id: string, input: ProductUpdateInput) => Promise<void>
}

export const Component = ({
  open,
  loading,
  values,
  handleOpen,
  handleUpdate,
}: Props) => {
  const initialValues = {
    name: values.name,
    description: values.description,
    price: values.price,
    category: { id: values.category.id },
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    description: Yup.string().nullable(),
    price: Yup.number().nullable(),
  })

  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (input) => {
      await handleUpdate(values.id, input)
      handleCloseModal()
    },
    enableReinitialize: true,
  })

  const handleCloseModal = () => {
    handleOpen(false)
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <ModalCard>
            <Card>
              <CardHeader
                title=""
                action={
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                    onClick={handleCloseModal}
                  >
                    <CloseIcon />
                  </IconButton>
                }
              />
              <CardContent>
                <form onSubmit={form.handleSubmit}>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}
                  >
                    <Grid item xs={12}>
                      <TextField
                        label="Nome"
                        variant="standard"
                        fullWidth
                        name="name"
                        value={form.values.name}
                        onChange={form.handleChange}
                        error={!!(form.touched.name && form.errors.name)}
                        helperText={form.errors.name}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Descrição"
                        variant="standard"
                        fullWidth
                        name="description"
                        value={form.values.description}
                        onChange={form.handleChange}
                        error={
                          !!(
                            form.touched.description && form.errors.description
                          )
                        }
                        helperText={form.errors.description}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type="number"
                        label="Preço"
                        variant="standard"
                        fullWidth
                        name="price"
                        value={form.values.price}
                        onChange={form.handleChange}
                        error={!!(form.touched.price && form.errors.price)}
                        helperText={form.errors.price}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" fullWidth>
                        Salvar
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

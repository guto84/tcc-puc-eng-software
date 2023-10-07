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
import { ConfigurationCreateInput } from '../../../../../service'

type Props = {
  open: boolean
  loading: boolean
  categoryId: string
  handleOpen: (open: boolean) => void
  handleCreate: (input: ConfigurationCreateInput) => Promise<void>
}

export const Component = ({
  open,
  loading,
  categoryId,
  handleOpen,
  handleCreate,
}: Props) => {
  const initialValues = {
    name: '',
    minimum: 0,
    maximum: 0,
    category: { id: categoryId },
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    minimum: Yup.number().required('Campo obrigatório'),
    maximum: Yup.number().required('Campo obrigatório'),
  })

  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      await handleCreate(values)
      handleCloseModal()
    },
  })

  const handleCloseModal = () => {
    handleOpen(false)
    form.handleReset(initialValues)
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
                        type="number"
                        label="Mínimo"
                        variant="standard"
                        fullWidth
                        name="minimum"
                        value={form.values.minimum}
                        onChange={form.handleChange}
                        error={!!(form.touched.minimum && form.errors.minimum)}
                        helperText={form.errors.minimum}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type="number"
                        label="Máximo"
                        variant="standard"
                        fullWidth
                        name="maximum"
                        value={form.values.maximum}
                        onChange={form.handleChange}
                        error={!!(form.touched.maximum && form.errors.maximum)}
                        helperText={form.errors.maximum}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" fullWidth>
                        Cadastrar
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

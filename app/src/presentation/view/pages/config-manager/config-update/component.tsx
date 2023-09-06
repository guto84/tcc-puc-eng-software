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
import {
  ConfigurationOutput,
  ConfigurationUpdateInput,
} from '../../../../../service'
import { Loading, ModalCard } from '../../../components'

type Props = {
  open: boolean
  loading: boolean
  values: ConfigurationOutput
  handleOpen: (open: boolean) => void
  handleUpdate: (id: string, input: ConfigurationUpdateInput) => Promise<void>
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
    minimum: values.minimum,
    maximum: values.maximum,
    category: {
      id: values.category.id,
    },
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    minimum: Yup.number().required('Campo obrigatório'),
    maximum: Yup.number().required('Campo obrigatório'),
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

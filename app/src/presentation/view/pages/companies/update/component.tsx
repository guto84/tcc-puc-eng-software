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
import { CompanyUpdateInput, CompanyOutput } from '../../../../../service'
import { Loading, ModalCard } from '../../../components'

type Props = {
  open: boolean
  loading: boolean
  values: CompanyOutput
  handleOpen: (open: boolean) => void
  handleCompanyUpdate: (id: string, input: CompanyUpdateInput) => Promise<void>
}

export const Component = ({
  open,
  loading,
  values,
  handleOpen,
  handleCompanyUpdate,
}: Props) => {
  const initialValues = { name: values.name, url: values.url }
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    url: Yup.string().required('Campo obrigatório'),
  })

  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (input) => {
      await handleCompanyUpdate(values.id, input)
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
                        label="URL"
                        variant="standard"
                        fullWidth
                        name="url"
                        value={form.values.url}
                        onChange={form.handleChange}
                        error={!!(form.touched.url && form.errors.url)}
                        helperText={
                          !!(form.touched.url && form.errors.url) &&
                          form.errors.url
                        }
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

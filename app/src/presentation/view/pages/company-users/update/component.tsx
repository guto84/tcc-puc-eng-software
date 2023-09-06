import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  Modal,
  TextField,
} from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import { Loading, ModalCard } from '../../../components'
import {
  RoleOutput,
  UserRolesOutput,
  UserUpdateInput,
} from '../../../../../service'

type Props = {
  values: UserRolesOutput
  open: boolean
  loading: boolean
  roleList: RoleOutput[]
  roleLoading: boolean
  handleOpen: (open: boolean) => void
  handleUserUpdate: (id: string, input: UserUpdateInput) => Promise<void>
}

export const Component = ({
  values,
  open,
  loading,
  roleList,
  roleLoading,
  handleOpen,
  handleUserUpdate,
}: Props) => {
  const initialValues = {
    name: values.name,
    email: values.email,
    roles: values.roles.reduce((acc: string[], item) => {
      acc.push(item.id)
      return acc
    }, []),
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    email: Yup.string().required('Campo obrigatório'),
    roles: Yup.array()
      .min(1, 'Selecionar pelo menos uma opção')
      .of(Yup.string().required())
      .required(),
  })

  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (input) => {
      await handleUserUpdate(values.id, input)
      handleCloseModal()
    },
    enableReinitialize: true,
  })

  const handleCloseModal = () => {
    handleOpen(false)
    form.handleReset(initialValues)
  }

  const roles: any = {
    ROLE_ADMIN: 'Admin',
    ROLE_PROVIDER: 'Fornecedor',
    ROLE_USER: 'Usuário',
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
                        type="email"
                        label="Email"
                        variant="standard"
                        fullWidth
                        name="email"
                        value={form.values.email}
                        onChange={form.handleChange}
                        error={!!(form.touched.email && form.errors.email)}
                        helperText={
                          !!(form.touched.email && form.errors.email) &&
                          form.errors.email
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl
                        required
                        error={!!(form.touched.roles && form.errors.roles)}
                        component="fieldset"
                        variant="standard"
                      >
                        <FormLabel component="legend">Permissões</FormLabel>
                        <FormGroup>
                          {roleList.map((item) => (
                            <FormControlLabel
                              key={item.id}
                              control={
                                <Checkbox
                                  checked={form.values.roles.includes(item.id)}
                                />
                              }
                              label={roles[item.authority]}
                              name="roles"
                              value={item.id}
                              onChange={form.handleChange}
                            />
                          ))}
                        </FormGroup>
                        <FormHelperText>{form.errors.roles}</FormHelperText>
                      </FormControl>
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
      <Loading loading={roleLoading} />
    </>
  )
}

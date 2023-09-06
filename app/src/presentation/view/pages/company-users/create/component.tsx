import { useParams } from 'react-router-dom'
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
import { RoleOutput, UserCreateInput } from '../../../../../service'
import { Loading, ModalCard } from '../../../components'

type Props = {
  open: boolean
  loading: boolean
  roleList: RoleOutput[]
  roleLoading: boolean
  handleOpen: (open: boolean) => void
  handleUserCreate: (input: UserCreateInput) => Promise<void>
}

export const Component = ({
  open,
  loading,
  roleList,
  roleLoading,
  handleOpen,
  handleUserCreate,
}: Props) => {
  const params = useParams()
  const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    company: { id: params.id || '' },
    roles: [],
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    email: Yup.string().required('Campo obrigatório'),
    roles: Yup.array()
      .min(1, 'Selecionar pelo menos uma opção')
      .of(Yup.string().required())
      .required(),
    password: Yup.string().required('Campo obrigatório'),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref('password')],
      'Senhas diferentes',
    ),
  })

  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      await handleUserCreate(values)
      handleCloseModal()
    },
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
                              control={<Checkbox />}
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
                      <TextField
                        type="password"
                        label="Senha"
                        variant="standard"
                        fullWidth
                        name="password"
                        value={form.values.password}
                        onChange={form.handleChange}
                        error={
                          !!(form.touched.password && form.errors.password)
                        }
                        helperText={
                          !!(form.touched.password && form.errors.password) &&
                          form.errors.password
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type="password"
                        label="Confirmar Senha"
                        variant="standard"
                        fullWidth
                        name="passwordConfirmation"
                        value={form.values.passwordConfirmation}
                        onChange={form.handleChange}
                        error={
                          !!(
                            form.touched.passwordConfirmation &&
                            form.errors.passwordConfirmation
                          )
                        }
                        helperText={
                          !!(
                            form.touched.passwordConfirmation &&
                            form.errors.passwordConfirmation
                          ) && form.errors.passwordConfirmation
                        }
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
      <Loading loading={roleLoading} />
    </>
  )
}

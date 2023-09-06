import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button, Grid, Paper, TextField, Typography } from '@mui/material'

import { Content, LoginForm } from './styles'
import { LoginInput } from '../../../../service'
import { Loading, Toast } from '../../components'

type Props = {
  handleLogin: (body: LoginInput) => Promise<void>
}

export const LoginComponent = ({ handleLogin }: Props) => {
  const initialValues = { email: '', password: '' }
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
  })

  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, action) => {
      await handleLogin(values)
      action.setSubmitting(false)
    },
  })

  return (
    <>
      <Content>
        <Paper elevation={3}>
          <LoginForm onSubmit={form.handleSubmit} name="login">
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={5}
            >
              <Grid item xs={12}>
                <Typography variant="h4" component="h1">
                  Login
                </Typography>
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
                  helperText={form.errors.email}
                />
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
                  error={!!(form.touched.password && form.errors.password)}
                  helperText={form.errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={form.isSubmitting}
                >
                  Entrar
                </Button>
              </Grid>
            </Grid>
          </LoginForm>
        </Paper>
      </Content>

      <Loading loading={form.isSubmitting} />

      <Toast />
    </>
  )
}

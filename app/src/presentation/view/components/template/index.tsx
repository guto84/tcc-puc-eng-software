import * as React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppBar, Button, Box, Container, Grid, Typography } from '@mui/material'
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material'
import * as S from './styles'

type Props = {
  children: React.ReactNode
}

export const Template = ({ children }: Props) => {
  const navigate = useNavigate()
  const params = useParams()

  return (
    <>
      <Box sx={{ flexGrow: 1, marginBottom: '16px' }}>
        <AppBar position="static">
          <Container maxWidth="xl">
            <S.Toolbar>
              <Typography
                variant="h6"
                component="h1"
                sx={{ flexGrow: 1, cursor: 'pointer' }}
                onClick={() => navigate('/')}
              >
                OnClick Delivery Eats
              </Typography>
              <div>
                <Button
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={() => navigate(`/${params.url}/pedidos/cadastrar`)}
                  color="inherit"
                >
                  <ShoppingCartIcon />
                </Button>
              </div>
            </S.Toolbar>
          </Container>
        </AppBar>
      </Box>

      <Container maxWidth="xl" sx={{ marginBottom: '96px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

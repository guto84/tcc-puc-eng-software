import { Button, Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h4">Onclick Delivery Eats</Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => navigate('/lanchonete')}
            >
              Cardápio
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => navigate('/empresas')}
            >
              Admin
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => navigate('/cardapios')}
            >
              Provider
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

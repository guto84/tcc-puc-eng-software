import { Backdrop, CircularProgress } from '@mui/material'

type Props = {
  loading: boolean
}

export const Loading = ({ loading }: Props) => (
  <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={loading}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
)

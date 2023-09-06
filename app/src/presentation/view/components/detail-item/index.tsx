import { Typography } from '@mui/material'

type Props = {
  label: string
  value: string
}

export const DetailItem = ({ label, value }: Props) => {
  return (
    <Typography variant="body1" gutterBottom>
      {label}: <strong>{value}</strong>
    </Typography>
  )
}

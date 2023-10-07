import { useNavigate, useParams } from 'react-router-dom'
import { Component } from './component'

export const Create = () => {
  const params = useParams()
  const navigate = useNavigate()

  const handleBack = () => navigate(`/${params.url}`)

  return <Component handleBack={handleBack} />
}

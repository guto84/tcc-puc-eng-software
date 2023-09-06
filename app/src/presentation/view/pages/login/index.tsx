import { useNavigate } from 'react-router-dom'
import { LoginComponent } from './component'
import { LoginInput, LoginService } from '../../../../service'
import { toast } from 'react-toastify'
import { jwtAdapter } from '../../../../infra/adapters'

export const Login = () => {
  const navigate = useNavigate()

  const handleLogin = async (body: LoginInput): Promise<void> => {
    try {
      const service = new LoginService()
      const response = await service.execute(body)
      const jwtDecode = jwtAdapter.decode(response.accessToken)

      localStorage.setItem('accessToken', response.accessToken)
      localStorage.setItem('roles', JSON.stringify(jwtDecode.authorities))

      if (jwtDecode.authorities.includes('ROLE_ADMIN')) {
        navigate('/empresas')
      } else {
        navigate('/pedidos')
      }
    } catch (error) {
      toast.error('Erro ao fazer login, tente novamente!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
    }
  }
  return <LoginComponent handleLogin={handleLogin} />
}

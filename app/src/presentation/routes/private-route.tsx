import { Navigate } from 'react-router-dom'

type Props = {
  children: React.ReactElement
  role: string
}

// export const PrivateRoute = ({ children, role }: Props) => {
export const PrivateRoute = ({ children }: Props) => {
  const handleRoute = () => {
    if (!localStorage.getItem('roles')) {
      return false
    }
    return true
  }
  // const handleRoute = (roles: string) => {
  //   if (!localStorage.getItem('roles')) {
  //     return Boolean(
  //       roles.includes(JSON.parse(localStorage.getItem('roles') || '')),
  //     )
  //   }
  //   return true
  // }

  // return handleRoute(role) ? children : <Navigate to="/login" replace />
  return handleRoute() ? children : <Navigate to="/login" replace />
}

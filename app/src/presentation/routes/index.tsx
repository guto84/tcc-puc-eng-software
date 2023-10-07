import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Companies,
  CompanyUsers,
  Login,
  MenuManager,
  ConfigManager,
  Orders,
  Menu,
  ProductDetails,
  Home,
} from '../view/pages'
import { PrivateRoute } from './private-route'
import { authCollection } from './auth-collection'
import { OrderCreate } from '../view/pages/order-create'
import { OrderDetail } from '../view/pages/order-detail'

const RoutesRoot = () => {
  return (
    <BrowserRouter /* basename="onclick-app-vite" */>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/empresas"
          element={
            <PrivateRoute role={authCollection.admin}>
              <Companies />
            </PrivateRoute>
          }
        />
        <Route
          path="/empresas/:id/usuarios"
          element={
            <PrivateRoute role={authCollection.admin}>
              <CompanyUsers />
            </PrivateRoute>
          }
        />
        <Route
          path="/cardapios"
          element={
            <PrivateRoute role={authCollection.provider}>
              <MenuManager />
            </PrivateRoute>
          }
        />
        <Route
          path="/cardapios/categorias/:id/configuracoes"
          element={
            <PrivateRoute role={authCollection.provider}>
              <ConfigManager />
            </PrivateRoute>
          }
        />
        <Route
          path="/pedidos"
          element={
            <PrivateRoute role={authCollection.provider}>
              <Orders />
            </PrivateRoute>
          }
        />
        <Route path="/:url" element={<Menu />} />
        <Route path="/:url/produtos/:id" element={<ProductDetails />} />
        <Route path="/:url/pedidos/:id" element={<OrderDetail />} />
        <Route path="/:url/pedidos/cadastrar" element={<OrderCreate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesRoot

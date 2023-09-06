import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export const Toast = () => (
  <ToastContainer
    position="bottom-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
  />
)

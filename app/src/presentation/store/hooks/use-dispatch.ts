import { useDispatch } from 'react-redux'

import type { AppDispatch } from '../../../presentation/store/root'

export const useAppDispatch: () => AppDispatch = useDispatch

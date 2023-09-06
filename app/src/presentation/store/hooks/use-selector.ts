import { TypedUseSelectorHook, useSelector } from 'react-redux'

import type { RootState } from '../../../presentation/store/root'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

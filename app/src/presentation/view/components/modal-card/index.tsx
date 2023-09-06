import * as S from './styles'

type Props = {
  children: React.ReactNode
}

export const ModalCard = ({ children }: Props) => (
  <S.ModalCard>{children}</S.ModalCard>
)

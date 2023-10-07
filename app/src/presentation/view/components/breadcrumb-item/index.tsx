import * as S from './styles'

type Props = {
  to: string
  text: string
}

export const BreadcrumbItem = ({ to, text }: Props) => (
  <S.BreadcrumbItem to={to}>{text}</S.BreadcrumbItem>
)

export type UserCreateInput = {
  name: string
  email: string
  password: string
  company: {
    id: string
  }
  roles: string[]
}

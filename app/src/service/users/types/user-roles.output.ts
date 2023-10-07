export type UserRolesOutput = {
  id: string
  name: string
  email: string
  roles: {
    id: string
    authority: Role
  }[]
}

type Role = {
  id: string
  authority: string
}

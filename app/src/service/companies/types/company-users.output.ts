export type CompanyUsersOutput = {
  id: string
  name: string
  url: string
  users: User[]
}

export type User = {
  id: string
  name: string
  email: string
  roles: Role[]
}

export type Role = {
  id: string
  authority: string
}

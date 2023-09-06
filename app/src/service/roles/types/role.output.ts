export type RoleOutput = {
  id: string
  authority: RoleName
}

export enum RoleName {
  ROLE_ADMIN,
  ROLE_PROVIDER,
  ROLE_USER,
}

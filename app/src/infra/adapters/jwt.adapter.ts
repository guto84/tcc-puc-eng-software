import * as jwt from 'jose'

export interface JwtDecode {
  authorities: string[]
}

export interface JwtAdapter {
  decode: (token: string) => JwtDecode
}

export const jwtAdapter: JwtAdapter = {
  decode: (token: string) => {
    const jwtDecode = jwt.decodeJwt(token)
    const rolesStringfy = JSON.stringify(jwtDecode.authorities)
    const roles: string[] = []
    JSON.parse(rolesStringfy).map((item: string) => roles.push(item))
    return {
      authorities: roles,
    }
  },
}

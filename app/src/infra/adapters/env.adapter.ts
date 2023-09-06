export type EnvAdapter = {
  apiUrl: string
}

export const envAdapter: EnvAdapter = {
  apiUrl: import.meta.env.VITE_API_URL,
}

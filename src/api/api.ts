export const api = {
  login: () => Promise.resolve(),
  signup: () => Promise.resolve(),
  hello: () => Promise.resolve(),
}

export interface IApi {
  hello: () => Promise<{ name: string }>
}

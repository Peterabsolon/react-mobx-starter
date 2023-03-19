export const is404 = (e: unknown) => {
  return (e as Response).status === 404
}

export const is401 = (e: unknown) => {
  return (e as Response).status === 401
}

export const is404 = (e: unknown) => {
  return (e as Response).status === 404
}

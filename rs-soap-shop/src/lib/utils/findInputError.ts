export function findInputError(errors: Record<string, unknown>, name: string) {
  const filtered = Object.keys(errors)
    .filter(key => key.includes(name))
    .reduce((cur, key) => {
      return Object.assign(cur, { error: errors[key] })
    }, {})
  return filtered
}

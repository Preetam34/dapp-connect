export const parseBoolean = (value?: string) => {
  return value && value.toLowerCase() === 'true'
}
export const IS_PRODUCTION = parseBoolean(process.env.NEXT_PUBLIC_IS_PRODUCTION)

type AddressString = `0x${string}`

type AnyFunction = (...args: any[]) => any

type AnyObject<T = any> = Record<string, T>
type Modify<T, R extends PartialAny<T>> = Omit<T, keyof R> & R

type ThemeMode = 'light' | 'dark'

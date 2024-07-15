export type Paths<T> = T extends Record<string, unknown>
  ? {
      [K in keyof T]-?: K extends string
        ? `${K}` | `${K}.${Paths<T[K]>}`
        : never;
    }[keyof T]
  : never;

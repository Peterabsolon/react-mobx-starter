declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_BASE_URL: string
    NEXT_PUBLIC_USE_MOCK_SERVER: string

    GITHUB_ID: string
    GITHUB_SECRET: string
  }
}

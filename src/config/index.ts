export const config = () => ({
  mistralKey: process.env.MISTRAL_API_KEY,
  github: {
    api: process.env.API_BASE_URL,
    clientId: process.env.GITHUB_CLIENT_ID,
    appId: process.env.GITHUB_APP_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    token: process.env.GITHUB_TOKEN || '',
  },
})

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { auth } from 'utils/firebase'

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
  mutate: {
    errorPolicy: 'all',
  },
}

const httpLink = createHttpLink({ uri: 'http://localhost:8080/graphql' })
const authLink = setContext(async (_, { headers }) => {
  const token = await auth.currentUser.getIdToken()
  return token
    ? { headers: { ...headers, authorization: `Bearer ${token}` } }
    : { headers }
})

const link = authLink.concat(httpLink)

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  defaultOptions,
})

export default client

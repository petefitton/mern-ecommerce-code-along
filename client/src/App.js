import Header from './components/Header.jsx';
import Clients from './components/Clients.jsx';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          }
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          }
        },
      }
    }
  }
})

const client = new ApolloClient({
  uri: 'http://localhost:5001/graphql',
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <h1>Hello World</h1>
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;

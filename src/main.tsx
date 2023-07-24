import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './index.css'
import './i18n';

const client = new ApolloClient({
    uri: 'mysql://l0072id9oou8jy4956e8:************@aws.connect.psdb.cloud/bocksbox?ssl={"rejectUnauthorized":true}'
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
          <ApolloProvider client={client}>
               <React.Suspense fallback="loading">
                    <App />
               </React.Suspense>
          </ApolloProvider>
    </React.StrictMode>,
)


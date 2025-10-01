import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from "@apollo/client/react";
import { Client } from "./config/ApolloClient.ts";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={Client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
//import '../styles/Covalent_index.module.css';
import App from './Covalent_App';
import { ConfigProvider } from 'antd'
import "../styles/globals.css";



const renderApp = () => {
  return(
    <React.StrictMode>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#0E0C18',
          },
        }}
      >
        <App />
      </ConfigProvider>
    </React.StrictMode>
  );
};

export default renderApp;
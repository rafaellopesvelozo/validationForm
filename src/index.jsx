import React from 'react';
import ReactDOM from 'react-dom/client';
import './Global.css';
import Form from './Components/form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form title='form'/>
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import {App} from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Theme preset={presetGpnDefault}>
    <App />
  </Theme>
);

import React from 'react';
import { createRoot } from 'react-dom/client';
import AppSimple from './AppSimple';
import './styles/index.css';

const root = createRoot(document.getElementById('root'));
root.render(<AppSimple />);

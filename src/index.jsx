import React from 'react';
import { createRoot } from 'react-dom/client';

// import style
import './styles/style.css';
import MyNotesApp from './components/MyNotesApp';

const root = createRoot(document.getElementById('root'));
root.render(<MyNotesApp />);
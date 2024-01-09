import React from 'react';
import { render } from 'react-dom';

import './styles/index.css';
import './styles/todo-list.css';
import './styles/filters.css';

import { App } from './App';
import { TodosProvider } from './TodosContext';

const root = document.getElementById('root');

render(
  <TodosProvider>
    <App />
  </TodosProvider>,
  root,
);

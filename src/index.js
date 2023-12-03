import React from 'react';
import ReactDOM from 'react-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App.jsx';
import './index.css';
import { Route, Routes } from 'react-router';
import LoginForm from './layout/LoginForm.jsx';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <HashRouter>
        <Routes>
          <Route index path="*" element={<LoginForm />} />
          <Route path="/trello" element={<App />} />
        </Routes>
      </HashRouter>
    </DndProvider>
  </Provider>,
  document.getElementById('root')
);

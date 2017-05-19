import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }	from 'react-redux';
import index from './app/reducers/index';

/* Import Pages */
import App from './app/components/pages/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

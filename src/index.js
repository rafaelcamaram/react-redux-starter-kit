/* Dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }	from 'react-redux';

/* Utils */
import Store from './app/store';

/* Components */
import App from './app/components/pages/app/App';

const store = Store();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

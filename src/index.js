import React from 'react';
import ReactDOM from 'react-dom';
import {NewPaperApp} from './NewPaperApp';
<<<<<<< HEAD
import {AppRouter} from './routers/AppRouter';

=======
import AppRouter from './routers/AppRouter'
import store from './store/store'
import {Provider} from 'react-redux'
import './index.css';
>>>>>>> 309ef3426de43475054239906fae0fe2222f4a8b

ReactDOM.render(

  <Provider store={store}>
    <NewPaperApp />
  </Provider>,
  document.getElementById('root')
);

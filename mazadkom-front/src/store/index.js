import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' ;

import store from './store'; 
import Main from './main.js';


function Entry() {
  return (
    <Provider store={store} >
     
      <Main />
    </Provider>
  )
}

const root = document.getElementById('root');
ReactDOM.render(<Entry />, root);
export default Entry;
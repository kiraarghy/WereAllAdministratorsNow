import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContentComponent from './contentComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ContentComponent />, document.getElementById('root'));
registerServiceWorker();

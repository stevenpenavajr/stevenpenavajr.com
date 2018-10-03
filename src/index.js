import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Portfolio from './sections/Portfolio';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div>
		<Portfolio />
	</div>
	,
	document.getElementById('root')
);

registerServiceWorker();

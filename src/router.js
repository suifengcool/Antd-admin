import React from 'react';
import dynamic from 'dva/dynamic'
import { Router, Route, Switch } from 'dva/router';
import Index from './routes/Index';

const RouterConfig = ({ history }) => {
	return (
		<Router history={history}>
			<Index />
		</Router>
	);
}

export default RouterConfig;

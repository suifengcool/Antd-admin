import React from 'react';
import { connect } from 'dva'

import Login from './Login';
import Main from './Main';

const Index = (main,dispatch) => {
	console.log('props22:',main)
const {isHomePage} = main.main
  return (
    <div>
      {isHomePage?<Login />:<Main />}
    </div>
  );
}

const mapStateToProps = (props) => {
	console.log('props:',props)
    return {
  		main: props.main
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
		dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);

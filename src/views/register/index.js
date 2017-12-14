import React from 'react'
import { connect } from 'dva'
import { Button, Row, Form, Input } from 'antd'

const FormItem = Form.Item

const LoginForm = ({
	props,
    dispatch,
    form: {
	    getFieldDecorator,
	    validateFieldsAndScroll,
    }
}) => {
	const handleOk = ()=>{
		validateFieldsAndScroll((errors, values) => {
		    if (errors) {
				return
		    }
		    dispatch({ type: 'login/login', payload: values })
		})
    }

    return (
    	<div>
			我是注册页
		</div>
    )
}

const mapStateToProps = (props) => {
    return {
  		props: props.login
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
		dispatch
    };
}

const Login = Form.create()(LoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default connect(({ props, dispatch}) => ({ props, dispatch }))(Form.create()(Login))
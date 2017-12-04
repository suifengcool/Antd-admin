import React from 'react'
import { connect } from 'dva'
import { Button, Row, Form, Input } from 'antd'
import styles from './index.less'

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
    	<div className={`${styles['bg']}`}>
			<div className={`${styles['form']}`}>
			    <div className={styles.logo}>
					<span>ABC</span>
			    </div>
			    <form>
					<FormItem hasFeedback>
					    {
					    	getFieldDecorator('username', {
								rules: [{
									required: true,
							    }],
						    })(<Input size="large" onPressEnter={handleOk} placeholder="Username" />)
						}
					</FormItem>
					<FormItem hasFeedback>
					    {
					    	getFieldDecorator('password', {
								rules: [{
									required: true,
							    }],
						    })(<Input size="large" type="password" onPressEnter={handleOk} placeholder="Password" />)
						}
					</FormItem>
					<Row>
					    <Button type="primary" size="large" onClick={handleOk}>
							Sign in
					    </Button>
					    <p>
							<span>Username：xugang</span>
							<span>Password：123456</span>
					    </p>
					</Row>

				</form>
			</div>
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
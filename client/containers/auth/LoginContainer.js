import React, {Component} from 'react';

// Import custom components
import LoginForm from '../../components/auth/LoginForm';

class LoginContainer extends Component {

    constructor(props) {
        super(props);

        this.submitForm = this.submitForm.bind(this);
    }


    /**
     * Submit the form.
     *
     * @param {object} formProps
     */
    submitForm(formProps) {
        console.log(formProps);
    }

    render() {
        return (
            <LoginForm
                onSubmit={this.submitForm}
            />
        )
    }

}

export default LoginContainer
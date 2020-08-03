import React, { Component } from "react";
import { getSession, refreshSession } from "./../util/storage/Auth";
import { findUserByEmail, updateUser } from "./../util/storage/Users";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './../assets/css/Style.css';
import Strings from '../util/Strings';

import { Link } from 'react-router-dom';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: ""
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    onSubmitForm() {
        const { name, email } = this.state;

        var currentEmail = JSON.parse(getSession()).email;
        var data = {
            name: name,
            email: email
        }

        var newUser = updateUser(currentEmail, data);
        refreshSession(newUser);
        alert(Strings.update_success);
    }

    render() {
        var userSession = JSON.parse(getSession());
        var currentLoggedUser = findUserByEmail(userSession.email);

        return (
            <div className="profile-template">
                <div className="login-container">
                    <h1 className="form-title">{Strings.update_profile}</h1>
                    <div className="text-field-login">
                        <TextField
                            required
                            id="name-required"
                            label="Name"
                            variant="outlined"
                            onChange={this.onNameChange}
                            className="text-field-login"
                            defaultValue={currentLoggedUser.name}
                        />
                    </div>
                    <div className="text-field-login">
                        <TextField
                            required
                            id="email-required"
                            label="Email"
                            variant="outlined"
                            onChange={this.onEmailChange}
                            className="text-field-login"
                            defaultValue={currentLoggedUser.email}
                        />
                    </div>
                    <div className="login-button-content">
                        <Link to="/home">
                            {Strings.back}
                        </Link>
                    </div>
                    <div className="login-button-content">
                        <Button id="login-button" variant="contained" color="primary" onClick={this.onSubmitForm}>
                            {Strings.update}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
import React from 'react';
import { loginUser } from '../../actions/userActions';
import {connect} from 'react-redux';
import { Buffer } from 'buffer';
 
class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            loggedIn: false,
            username: '',
            password: '',
            url: ''
        }
    }

    handleLogin(e) {
        this.props.loginUser(this.state)
    }

    handleUser(e) {
        this.setState({username: e.target.value})
    }

    handlePwd(e) {
        this.setState({password: e.target.value})
    }

    render() {
        if(this.props.url === '/cities') {
            this.props.history.push('../cities');
        }
        return(
            <>
                <div>
                    <h5>Login</h5>
                </div>
                <div className="form-group row">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail3" placeholder="Email" onChange={(e) => this.handleUser(e)}/>
                        </div>
                </div>
            
                <div class="form-group row">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword3" placeholder="Password" onChange={(e) => this.handlePwd(e)}/>
                        </div>
                </div>
                <div>
                    <span><input type ="checkbox"></input></span>
                    <span><label>Remember me</label></span>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary" value="OK" onClick={(e) => this.handleLogin(e)}>Sign In</button>
                </div> 
            </>
        );
    }
}

const mapStateToProps = state => ({
    message: state.login.message,
    url: state.login.url
})

export default connect(mapStateToProps, {loginUser})(Login);

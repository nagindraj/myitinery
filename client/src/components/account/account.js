import React from 'react';
import { postUserData } from '../../actions/userActions';
import {connect} from 'react-redux';
import './account.css';

class Account extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            country: '',
            username: '',
            password: '',
            email: '',
            fname: '',
            lname: '',
            messageText: ''
        }
    }

    handleFileUpload(e) {
        this.setState({file: e.target.files !== null  && e.target.files[0]})
    }

    handleCountry(e) {
        this.setState({ country: e.target.value })
    }

    handleText(e) {
        if(e.target.name === 'username') {
            this.setState({ username: e.target.value })
        } else if(e.target.name === 'password') {
            this.setState({ password: e.target.value })
        } else if(e.target.name === 'email') {
            this.setState({ email: e.target.value })
        } else if(e.target.name === 'fname') {
            this.setState({ fname: e.target.value })
        } else if(e.target.name === 'lname') {
            this.setState({ lname: e.target.value })
        }
    }

    handleRegister() {
        if(this.state.file === '' || this.state.username === '' ||
            this.state.password === '' || this.state.fname === '' 
            || this.state.country === ''
        ) {
            this.setState({ messageText: 'Please enter all the required fields' })
        } else {
            this.props.postUserData(this.state);
        }
    }

    render() {
        console.log(this.props);
        return (
        <div id="account">
            <div id="account_label">
                Create Account
            </div>
            <div id="photo">
                <label htmlFor="upload"> Add Photo </label>
                <input type="file" id="upload" onChange={(e) => this.handleFileUpload(e)}/>
            </div>
            <div id="details">
                <div>
                    <span>Username:<span className="asterik">*</span></span>
                    <span>
                        <input type="textbox" className="text" name="username" onChange={(e) => this.handleText(e)}/>
                    </span>
                </div>
                <div>
                    <span>Password:<span className="asterik">*</span></span>
                    <span>
                        <input type="password" className="text" name="password" onChange={(e) => this.handleText(e)}/>
                    </span>
                </div>
                <div>
                    <span>Email:<span className="asterik">*</span></span>
                    <span>
                        <input type="textbox" className="text" name="email" onChange={(e) => this.handleText(e)}/>
                    </span>
                </div>
                <div>
                    <span>First Name:<span className="asterik">*</span></span>
                    <span>
                        <input type="textbox" className="text" name="fname" onChange={(e) => this.handleText(e)}/>
                    </span>
                </div>
                <div>
                    <span>Last Name:</span>
                    <span>
                        <input type="textbox" className="text" name="lname" onChange={(e) => this.handleText(e)}/>
                    </span>
                </div>
                <div>
                    <span>Country:<span className="asterik">*</span></span>
                    <span>
                        <select id="country" onChange={(e) => this.handleCountry(e)}>
                            <option>--Select--</option>
                            <option>England</option>
                            <option>France</option>
                            <option>Germany</option>
                            <option>Holland</option>
                            <option>Ireland</option>
                            <option>Spain</option>
                            <option>United States</option>
                        </select>
                    </span>
                </div>
                <div id="toc">
                    <input type="checkbox"/>
                    <label>I agree to MYtinerary's <a href="#">Terms & Conditions</a></label>
                </div>
                <div id="submit">
                    <input type="button" value="OK" onClick={() => this.handleRegister()}/>
                </div>
                <div className="error">
                    {this.state.messageText || this.props.userMessage}
                </div>
            </div>        
        </div>
        )
    }
}
const mapStateToProps = state => ({
    userMessage: state.message.message,
    token: state.message.token
})

export default connect(mapStateToProps, {postUserData})(Account);
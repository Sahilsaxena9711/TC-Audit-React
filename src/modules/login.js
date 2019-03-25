import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            empId: "",
            password: "",
            loader: false
        }
    }
    componentDidMount() {
        // if (this.props.login.userLogin.isLoggedIn) {
        //     this.props.history.push('/profile')
        // }
    }

    componentWillReceiveProps(nextProps) {
        const { isSuccess, isError, isLoading } = nextProps.login.userLogin;
        if (isError) {
            this.setState({
                loader: false
            })
            if(nextProps.login.userLogin.data.error == undefined){
                alert('Unable to login');
            }else{
                alert(`${nextProps.login.userLogin.data.error}`);
            }
        }
        else if (isSuccess) {
            this.setState({
                loader: false
            })
            if(nextProps.login.userLogin.data.data.data.role == "HR"){
                this.props.history.push('/viewAudit')
            }else{
                this.props.history.push('/audit')
            }
        }else if(isLoading){
            this.setState({
                loader: true
            })
        }
    }
    
    onSubmitLogin(e) {
        e.preventDefault();
        const { empId, password } = this.state;
        this.setState({
            loader: true
        })
        this.props.userLoginRequest({ empId: empId, password: password });
    }
    render() {
        const { email, password } = this.state;
        return (
            <div className='login-view container-fluid'>
                {/* <Header/> */}
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='row'>
                            <div className='col-sm-3'></div>
                            <div className='col-sm-6 form'>
                                {!this.state.loader ? <div>
                                    <img src="https://cdnlinks.000webhostapp.com/final-logo.png" />
                                    <h1 className="pageHeading">Login</h1>
                                    <form autoComplete="off" onSubmit={(e) => this.onSubmitLogin(e)}>
                                        <div className="form-group">
                                            <label className="f-left" htmlFor="email">Employee ID</label>
                                            <input value={this.state.empId} onChange={(e) => this.setState({ empId: e.target.value })} required placeholder="TCEMPXXXX" type="text" className="form-control" id="empId" />
                                        </div>
                                        <div className="form-group">
                                            <label className="f-left" htmlFor="pwd">Password</label>
                                            <input value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} required placeholder="************" type="password" className="form-control" id="pwd" />
                                        </div>
                                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                                    </form>
                                </div> : <div className="spinner-grow text-info loadCenter"></div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export function mapStateToProps(state) {
    return {
        login: state.login
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

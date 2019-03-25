import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import { isUserAlreadyLoggedIn } from "../generic";
import TcNav from "../components/tcNav";

class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newpassword: "",
            oldpassword: "",
            loader: false
        };
    }

    componentDidMount() {
        const { history } = this.props;
        !isUserAlreadyLoggedIn() ? history.push("/") : null;
        // this.props.getAuditRequest('data');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.login.changePassword.isSuccess) {
            this.setState({
                loader: false,
                oldpassword: "",
                newpassword: ""
            })
            this.props.changePasswordRequest();
            alert(`${nextProps.login.changePassword.data.data.message}`)
        } else if (nextProps.login.changePassword.isError) {
            this.setState({
                loader: false
            })
            this.props.changePasswordRequest();
            alert(`${nextProps.login.changePassword.data.error}`)
        }
    }

    changePassword(e) {
        e.preventDefault();
        const { oldpassword, newpassword } = this.state;
        if(newpassword.trim() == "" || newpassword.length <= 5){
            alert(`Password should be atleast 6 characters long`)
        }else{
            let data = {
               newpassword,
               oldpassword
            }
            this.setState({
                loader: true
            })
            this.props.changePasswordRequest(data);
        }
    }

    logout() {
        sessionStorage.clear();
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <TcNav />
                <div className="login-view container-fluid">
                    {!this.state.loader ?
                        <div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="row">
                                        <div className="col-sm-2" />
                                        <div className="col-sm-8 form">
                                            <h1 className="pageHeading">CHANGE PASSWORD</h1>
                                        </div>
                                        <div className="col-sm-2 m-top-25" >
                                            <button type="button" onClick={() => this.logout()} className="btn btn-outline-danger" >Logout</button></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-6 form">
                                    <form onSubmit={(e) => this.changePassword(e)}>
                                        <div className="form-group">
                                            <label className="f-left">Current Password</label>
                                            <input value={this.state.oldpassword} placeholder="**********" onChange={(e) => this.setState({ oldpassword: e.target.value })} required type="password" className="form-control" id="invId" />
                                        </div>
                                        <div className="form-group">
                                            <label className="f-left">New Password</label>
                                            <input value={this.state.newpassword} placeholder="**********" onChange={(e) => this.setState({ newpassword: e.target.value })} required type="password" className="form-control" id="invName" />
                                        </div>
                                        <button type="submit" className="btn btn-outline-primary">Change Password</button>
                                    </form>
                                </div>
                                <div className="col-sm-3"></div>
                            </div>
                        </div>
                        :
                        <div className="form z-i-1100">
                            <div className="z-i-1100 spinner-grow text-info loadCenter"></div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export function mapStateToProps(state) {
    return {
        login: state.login,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import { isUserAlreadyLoggedIn } from "../generic";
import TcNav from "../components/tcNav";

class AddRequirement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: "",
            loader: false
        };
    }

    componentDidMount() {
        const { history } = this.props;
        !isUserAlreadyLoggedIn() ? history.push("/") : null;
        // this.props.getAuditRequest('data');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.requirement.addRequirement.isSuccess) {
            this.setState({
                loader: false,
                comment: ""
            })
            alert(`${nextProps.requirement.addRequirement.data.data.message}`)
        } else if (nextProps.requirement.addRequirement.isError) {
            this.setState({
                loader: false
            })
            alert(`${nextProps.requirement.addRequirement.data.error}`)
        }
    }

    addRequirement(e) {
        e.preventDefault();
        const { comment} = this.state;
        let data = {
            comment
        }
        this.setState({
            loader: true
        })
        this.props.addRequirementRequest(data)
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
                                            <h1 className="pageHeading">ADD REQUIREMENT</h1>
                                        </div>
                                        <div className="col-sm-2 m-top-25" >
                                            <button type="button" onClick={() => this.logout()} className="btn btn-outline-danger" >Logout</button></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-6 form">
                                    <form autoComplete="off" onSubmit={(e) => this.addRequirement(e)}>
                                        <div className="form-group">
                                            <label className="f-left">Requirement</label>
                                            <textarea value={this.state.comment} rows="5" placeholder="My requirement" onChange={(e) => this.setState({ comment: e.target.value })} required className="form-control" id="invBrand" />
                                        </div>
                                        <button type="submit" className="btn btn-outline-primary">Add Requirement</button>
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
        requirement: state.requirement,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRequirement);

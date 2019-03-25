import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import { isUserAlreadyLoggedIn } from "../generic";
import Modal from "../components/modal";
import Nav from "../components/nav";

class Requirement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loader: true
        };
    }
    componentDidMount() {
        const { history } = this.props;
        !isUserAlreadyLoggedIn() ? history.push("/") : null;
        this.props.getRequirementRequest('data');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.requirement.getRequirement.isSuccess) {
            this.setState({
                data: nextProps.requirement.getRequirement.data.data.data,
                loader: false
            })
            this.props.getRequirementRequest();
        } else if (nextProps.requirement.getRequirement.isError) {
            this.setState({
                loader: false
            })
            this.props.getRequirementRequest();
            alert('Error while fetching Requirements')
        }

        if (nextProps.requirement.approveRequirement.isSuccess) {
            this.props.approveRequirementRequest();
            alert(`${nextProps.requirement.approveRequirement.data.data.message}`)
        } else if (nextProps.requirement.approveRequirement.isError) {
            this.props.approveRequirementRequest();
            alert('Error while approving requirement')
        }
    }

    onApprove(id) {
        this.setState({
            loader: true
        })
        this.props.approveRequirementRequest(id);
    }


    logout() {
        sessionStorage.clear();
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="login-view container-fluid">
                    {/* <Header /> */}
                    {!this.state.loader ?
                        <div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="row">
                                        <div className="col-sm-2" />
                                        <div className="col-sm-8 form">
                                            <h1 className="pageHeading">Requirements</h1>
                                        </div>
                                        <div className="col-sm-2 m-top-25" >
                                            <button type="button" onClick={() => this.logout()} className="btn btn-outline-danger" >Logout</button></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-10">
                                    <div className="tableResponsive">
                                        <table className="table table-striped table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Employee ID</th>
                                                    <th>Employee Name</th>
                                                    <th>Comment</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.data.length == 0 ? <p>No Requirements</p> : this.state.data.map((data, key) => (<tr key={key}>
                                                    <td>{data.empId}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.comment}</td>
                                                    <td>{data.date.split('T')[0]}</td>
                                                    <td>{data.status}</td>
                                                    <td><button onClick={(e) => this.onApprove(`${data._id}`)} type="button" data-toggle="modal" data-target="#myModal" className="btn btn-outline-secondary">Approve</button></td>
                                                </tr>))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-sm-1"></div>
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
        requirement: state.requirement
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Requirement);

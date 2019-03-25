import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import { isUserAlreadyLoggedIn } from "../generic";
import Nav from "../components/nav";

class AssignInventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inventory: [],
            employee: [],
            selectedEmp: "",
            selectedInv: "",
            loader: true
        };
    }

    componentDidMount() {
        const { history } = this.props;
        !isUserAlreadyLoggedIn() ? history.push("/") : null;
        this.props.allInvRequest('data');
        this.props.allEmpRequest('data');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.inventory.allInv.isSuccess && nextProps.login.allEmp.isSuccess) {
            this.setState({
                inventory: nextProps.inventory.allInv.data.data.data,
                employee: nextProps.login.allEmp.data.data.data,
                loader: false
            })
            this.props.allInvRequest();
            this.props.allEmpRequest();
        } else if (nextProps.inventory.allInv.isError && nextProps.login.allEmp.isSuccess) {
            this.setState({
                loader: false
            })
            this.props.allInvRequest();
            this.props.allEmpRequest();
        }

        if (nextProps.inventory.assignInv.isSuccess) {
            this.setState({
                loader: false,
                selectedEmp: "",
                selectedInv: "",
            })
            alert(`${nextProps.inventory.assignInv.data.data.message}`);
            this.props.assignInvRequest();
        } else if (nextProps.inventory.assignInv.isError) {
            this.setState({
                loader: false
            })
            alert(`${nextProps.inventory.assignInv.data.error}`);
            this.props.assignInvRequest();
        }
    }

    logout() {
        sessionStorage.clear();
        this.props.history.push('/');
    }

    assign(e) {
        e.preventDefault();
        let data = {
            invId: this.state.selectedInv,
            empId: this.state.selectedEmp.split('-')[0],
            name: this.state.selectedEmp.split('-')[1]
        }
        this.props.assignInvRequest(data);
        this.setState({
            loader: true
        })
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="login-view container-fluid">
                    {!this.state.loader ?
                        <div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="row">
                                        <div className="col-sm-2" />
                                        <div className="col-sm-8 form">
                                            <h1 className="pageHeading">ASSIGN INVENTORY</h1>
                                        </div>
                                        <div className="col-sm-2 m-top-25" >
                                            <button type="button" onClick={() => this.logout()} className="btn btn-outline-danger" >Logout</button></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-6 form">
                                    <form onSubmit={(e) => this.assign(e)}>
                                        <label className="f-left">Inventory</label>
                                        <select required="required" value={this.state.selectedInv} onChange={(e) => this.setState({ selectedInv: e.target.value })} className="custom-select mb-3">
                                            <option value="">Select Inventory</option>
                                            {this.state.inventory.length == 0 ? null : this.state.inventory.map((data, key) => (
                                                <option key={key} value={data.invId}>{data.invId} {data.invBrand} {data.invName} {data.invID} {data.type} {data.name}</option>
                                            ))}
                                        </select>
                                        <label className="f-left">Employee</label>
                                        <select required="required" value={this.state.selectedEmp} onChange={(e) => this.setState({ selectedEmp: e.target.value })} className="custom-select mb-3">
                                            <option value="">Select Employee</option>
                                            {this.state.employee.length == 0 ? null : this.state.employee.map((data, key) => (
                                                <option key={key} value={data.empId + "-" + data.name}>{data.empId} {data.name} </option>
                                            ))}
                                        </select>
                                        <button type="submit" className="btn btn-outline-primary">Assign</button>
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
        inventory: state.inventory,
        login: state.login,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AssignInventory);

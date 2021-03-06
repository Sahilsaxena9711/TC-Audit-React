import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import { isUserAlreadyLoggedIn } from "../generic";
import Nav from "../components/nav";

class UnassignedInventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loader: true,
        };
    }

    componentDidMount() {
        const { history } = this.props;
        !isUserAlreadyLoggedIn() ? history.push("/") : null;
        this.props.getUnAssignedInvRequest('data');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.inventory.getUnAssignedInv.isSuccess) {
            this.setState({
                data: nextProps.inventory.getUnAssignedInv.data.data.data,
                loader: false,
            })
        } else if (nextProps.inventory.getUnAssignedInv.isError) {
            this.setState({
                loader: false
            })
            alert('Error Fetching Unassigned Inventory')
        }
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
                    {!this.state.loader ?
                        <div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="row">
                                        <div className="col-sm-2" />
                                        <div className="col-sm-8 form">
                                            <h1 className="pageHeading">UNASSIGNED INVENTORY</h1>
                                        </div>
                                        <div className="col-sm-2 m-top-25" >
                                            <button type="button" onClick={() => this.logout()} className="btn btn-outline-danger" >Logout</button></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-top-25">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-10">
                                    <div className="tableResponsive">
                                        <table className="table table-striped table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Inventory ID</th>
                                                    <th>Inventory Brand</th>
                                                    <th>Inventory Name</th>
                                                    <th>Type</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.data.length == 0 ? <tr>No Unassigned Inventory</tr> : this.state.data.map((data, key) => (<tr key={key}>
                                                    <td>{data.invId}</td>
                                                    <td>{data.invBrand}</td>
                                                    <td>{data.invName}</td>
                                                    <td>{data.type}</td>
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
        inventory: state.inventory,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UnassignedInventory);

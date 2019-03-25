import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import { isUserAlreadyLoggedIn } from "../generic";
import Nav from "../components/nav";

class AddInventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            invId: "",
            invBrand: "",
            invName: "",
            type: "",
            empId: "NA",
            name: "NA",
            loader: false,
            fileName: "",
            billImage: "NA"
        };
    }

    componentDidMount() {
        const { history } = this.props;
        !isUserAlreadyLoggedIn() ? history.push("/") : null;
        // this.props.getAuditRequest('data');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.inventory.addInv.isSuccess) {
            this.setState({
                loader: false,
                invId: "",
                invBrand: "",
                invName: "",
                type: "",
                fileName: "",
                billImage: "NA"
            })
            alert(`${nextProps.inventory.addInv.data.data.message}`)
        } else if (nextProps.inventory.addInv.isError) {
            this.setState({
                loader: false
            })
            alert(`${nextProps.inventory.addInv.data.error != undefined ? "Inventory with Inventory ID already Exists" : "Error While Adding Inventory"}`)
        }
    }

    addInventory(e) {
        e.preventDefault();
        const { invId, invBrand, invName, type, empId, billImage } = this.state;
        let data = {
            invId,
            invBrand,
            invName,
            type,
            empId,
            name,
            billImage
        }
        this.setState({
            loader: true
        })
        this.props.addInvRequest(data)
    }

    handleFile(e) {
        var file = e.target.files[0];
        var reader = new FileReader();
        let t= this;
        reader.onloadend = function () {
            t.setState({
                billImage: reader.result,
                fileName: file.name,
            })
        }
        reader.readAsDataURL(file);
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
                                            <h1 className="pageHeading">ADD INVENTORY</h1>
                                        </div>
                                        <div className="col-sm-2 m-top-25" >
                                            <button type="button" onClick={() => this.logout()} className="btn btn-outline-danger" >Logout</button></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-6 form">
                                    <form autoComplete="off" onSubmit={(e) => this.addInventory(e)}>
                                        <div className="form-group">
                                            <label className="f-left">Inventory ID</label>
                                            <input value={this.state.invId} placeholder="TCINVXXXX" onChange={(e) => this.setState({ invId: e.target.value })} required type="text" className="form-control" id="invId" />
                                        </div>
                                        <div className="form-group">
                                            <label className="f-left">Inventory Name</label>
                                            <input value={this.state.invName} placeholder="Think Pad E470" onChange={(e) => this.setState({ invName: e.target.value })} required type="text" className="form-control" id="invName" />
                                        </div>
                                        <div className="form-group">
                                            <label className="f-left">Inventory Brand</label>
                                            <input value={this.state.invBrand} placeholder="Lenovo" onChange={(e) => this.setState({ invBrand: e.target.value })} required type="text" className="form-control" id="invBrand" />
                                        </div>
                                        <div className="form-group">
                                            <label className="f-left">Type</label>
                                            <select value={this.state.type} onChange={(e) => this.setState({ type: e.target.value })} required="required" className="custom-select mb-3">
                                                <option value="">Select Type</option>
                                                <option value="Laptop">Laptop</option>
                                                <option value="Mouse">Mouse</option>
                                                <option value="Charger">Charger</option>
                                                <option value="Mobile">Mobile</option>
                                                <option value="Tablet">Tablet</option>
                                                <option value="Wifi-Dongle">Wifi-Dongle</option>
                                            </select>
                                        </div>
                                        <label className="f-left">Bill Image</label>
                                        <div className="custom-file mb-3">
                                            <input type="file" onChange={(e) => this.handleFile(e)}  className="custom-file-input" id="customFile" name="filename" />
                                            <label className="custom-file-label" htmlFor="customFile">{this.state.fileName == "" ? "Choose file" : this.state.fileName}</label>
                                        </div>
                                        <button type="submit" className="btn btn-outline-primary">Add Inventory</button>
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
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddInventory);

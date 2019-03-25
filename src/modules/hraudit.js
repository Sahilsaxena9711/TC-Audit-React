import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import { isUserAlreadyLoggedIn } from "../generic";
import Modal from "../components/modal";
import Nav from "../components/nav";
import EditModal from "../components/editModal";

class HrAudit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      modal: false,
      invId: "",
      comment: "",
      loader: true,
      id: ""
    };
  }
  componentDidMount() {
    const { history } = this.props;
    !isUserAlreadyLoggedIn() ? history.push("/") : null;
    this.props.getAssignedInvRequest('data');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.inventory.getAssignedInv.isSuccess) {
      this.setState({
        data: nextProps.inventory.getAssignedInv.data.data.data,
        loader: false
      })
      this.props.getAssignedInvRequest();
    } else if (nextProps.inventory.getAssignedInv.isError) {
      this.setState({
        loader: false
      })
      this.props.getAssignedInvRequest();
      alert('Error while fetching assigned inventory')
    }

    if (nextProps.inventory.editInv.isSuccess) {
      this.setState({
        edit: false,
        id: ""
      })
      this.props.editInvRequest();
      alert(`${nextProps.inventory.editInv.data.data.message}`);
    } else if (nextProps.inventory.editInv.isError) {
      this.setState({
        loader: false
      })
      this.props.editInvRequest();
      alert(`${nextProps.inventory.editInv.data.error}`)
    }

    if (nextProps.audit.createAudit.isSuccess) {
      this.setState({
        loader: false,
        modal: false
      })
      this.props.createAuditRequest();
      alert(`${nextProps.audit.createAudit.data.data.message}`)
    } else if (nextProps.audit.createAudit.isError) {
      this.setState({
        loader: false
      })
      this.props.createAuditRequest();
      alert('Error while adding audit')
    }
  }

  onSave(data) {
    this.setState({
      loader: true
    })
    this.props.createAuditRequest(data);
  }

  onEdit(data) {
    this.setState({
      loader: true
    })
    this.props.editInvRequest(data);
  }

  modalopenClose(e) {
    this.setState({
      modal: !this.state.modal,
      invId: e
    })
  }

  editopenClose(e) {
    this.setState({
      edit: !this.state.edit,
      id: e
    })
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
                      <h1 className="pageHeading">AUDIT</h1>
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
                          <th>Inventory ID</th>
                          <th>Inventory Brand</th>
                          <th>Inventory Name</th>
                          <th>Type</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.data.length == 0 ? <p>No Inventory Assigned</p> : this.state.data.map((data, key) => (<tr key={key}>
                          <td>{data.invId}</td>
                          <td>{data.invBrand}</td>
                          <td>{data.invName}</td>
                          <td>{data.type}</td>
                          <td>
                            <button onClick={(e) => this.modalopenClose(`${data.invId}`)} type="button" data-toggle="modal" data-target="#myModal" className="btn btn-outline-secondary">Audit</button>
                            &nbsp;&nbsp;<button onClick={(e) => this.editopenClose(`${data._id}`)} type="button" data-toggle="modal" data-target="#myModal" className="btn btn-outline-primary">Edit</button>
                          </td>
                        </tr>))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-sm-1"></div>
              </div>
              {this.state.modal ? <Modal onSave={(e) => this.onSave(e)} {...this.state} {...this.props} invId={this.state.invId} modalopenClose={(e) => this.modalopenClose(e)} /> : null}
              {this.state.edit ? <EditModal onEdit={(e) => this.onEdit(e)} {...this.state} {...this.props} editopenClose={(e) => this.editopenClose(e)} /> : null}
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
    audit: state.audit
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HrAudit);

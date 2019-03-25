import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import { isUserAlreadyLoggedIn } from "../generic";
import Nav from "../components/nav";

class ViewAudit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      repair: [],
      functioning: [],
      loader: true,
      status: "functioning"
    };
  }

  componentDidMount() {
    const { history } = this.props;
    !isUserAlreadyLoggedIn() ? history.push("/") : null;
    this.props.getAuditRequest('data');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.audit.getAudit.isSuccess) {
      let repair = [];
      let functioning = []
      for (let i = 0; i < nextProps.audit.getAudit.data.data.data.length; i++) {
        if (nextProps.audit.getAudit.data.data.data[i].status == "Functioning") {
          functioning.push(nextProps.audit.getAudit.data.data.data[i])
        } else {
          repair.push(nextProps.audit.getAudit.data.data.data[i])
        }
      }
      this.setState({
        data: nextProps.audit.getAudit.data.data.data,
        loader: false,
        repair,
        functioning
      })
    } else if (nextProps.audit.getAudit.isError) {
      this.setState({
        loader: false
      })
      alert('Error Fetching Audits')
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
                      <h1 className="pageHeading">VIEW AUDITS</h1>
                    </div>
                    <div className="col-sm-2 m-top-25" >
                      <button type="button" onClick={() => this.logout()} className="btn btn-outline-danger" >Logout</button></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <span className={this.state.status == "functioning" ? "nav-link pointerEvent active" : "pointerEvent nav-link"} onClick={(e) => this.setState({ status: "functioning" })} >Fuctioning</span>
                    </li>
                    <li className="nav-item">
                      <span className={this.state.status == "repair" ? "nav-link pointerEvent active" : "pointerEvent nav-link"} onClick={(e) => this.setState({ status: "repair" })}>Repair/Enhancement</span>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-1"></div>
              </div>
              <div className="row m-top-25">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                  <div className="tableResponsive">
                    <table className="table table-striped table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>Employee ID</th>
                          <th>Employee Name</th>
                          <th>Inventory ID</th>
                          <th>Inventory Brand</th>
                          <th>Inventory Name</th>
                          <th>Type</th>
                          <th>Audit Date</th>
                          <th>Comment</th>
                        </tr>
                      </thead>
                      {this.state.status == "functioning" ? <tbody>
                        {this.state.functioning.length == 0 ? <tr>No Audits Yet</tr> : this.state.functioning.map((data, key) => (<tr key={key}>
                          <td>{data.empId}</td>
                          <td>{data.name}</td>
                          <td>{data.invId}</td>
                          <td>{data.invBrand}</td>
                          <td>{data.invName}</td>
                          <td>{data.type}</td>
                          <td>{data.date.split('T')[0]}</td>
                          <td>{data.comment}</td>
                        </tr>))}
                      </tbody>
                        :
                        <tbody>
                          {this.state.repair.length == 0 ? <tr>No Audits Yet</tr> : this.state.repair.map((data, key) => (<tr key={key}>
                            <td>{data.empId}</td>
                            <td>{data.name}</td>
                            <td>{data.invId}</td>
                            <td>{data.invBrand}</td>
                            <td>{data.invName}</td>
                            <td>{data.type}</td>
                            <td>{data.date.split('T')[0]}</td>
                            <td>{data.comment}</td>
                          </tr>))}
                        </tbody>}
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
    audit: state.audit,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAudit);

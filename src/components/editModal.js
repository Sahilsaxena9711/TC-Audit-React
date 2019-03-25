import React from 'react';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            invId: "",
            invBrand: "",
            invName: "",
            type: "",
        }
    }
    componentWillMount() {
        for (let i = 0; i < this.props.data.length; i++) {
            if (this.props.data[i]._id == this.props.id) {
                this.setState({
                    data: this.props.data[i],
                    invId: this.props.data[i].invId,
                    invBrand: this.props.data[i].invBrand,
                    invName: this.props.data[i].invName,
                    type: this.props.data[i].type,
                })
            }
        }
    }

    onSave(e) {
        e.preventDefault();
        const {invBrand, invId, invName, type} = this.state;
        let data = {
            invBrand,
            invId,
            invName,
            type,
            id: this.props.id
        }
        this.props.onEdit(data)
    }

    render() {
        return (
            <div className="modal modalClass" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Inventory</h4>
                            <button onClick={(e) => this.props.editopenClose(e)} type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="row">
                        <div className="col-sm-12 form">
                            <form onSubmit={(e) => this.onSave(e)}>
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
                                {/* <!-- Modal footer --> */}
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-outline-primary" >Save</button>
                                </div>
                            </form>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
}
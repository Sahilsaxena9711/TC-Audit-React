import React from 'react';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            comment: "",
            status: ""
        }
    }
    componentWillMount() {
        for (let i = 0; i < this.props.data.length; i++) {
            if (this.props.data[i].invId == this.props.invId) {
                this.setState({
                    data: this.props.data[i]
                })
            }
        }
    }

    onSave(e) {
        e.preventDefault();
        let final = this.state.data;
        final.comment = this.state.comment;
        final.status = this.state.status;
        this.props.onSave(final)
    }

    render() {
        return (
            <div className="modal modalClass" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">
                            <h4 className="modal-title">Add Comment For Inventory</h4>
                            <button onClick={(e) => this.props.modalopenClose(e)} type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="modal-body">
                            <label><b>Inventory ID :</b> {this.state.data.invId}</label>
                            <br />
                            <label><b>Inventory Name : </b> {this.state.data.invName}</label>
                            <br />
                            <label><b>Inventory Brand : </b> {this.state.data.invBrand}</label>
                            <br />
                            <label><b>Type : </b> {this.state.data.type}</label>
                        </div>
                        <form onSubmit={(e) => this.onSave(e)}>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="f-left">Status</label>
                                    <select value={this.state.status} onChange={(e) => this.setState({ status: e.target.value })} required="required" className="custom-select mb-3">
                                        <option value="">Select Status</option>
                                        <option value="Functioning">Functioning</option>
                                        <option value="Enhancement/Repair">Enhancement/Repair</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="comment">Comment:</label>
                                    <textarea required onChange={(e) => this.setState({ comment: e.target.value })} value={this.state.comment} className="form-control" rows="5" id="comment"></textarea>
                                </div>
                            </div>
                            {/* <!-- Modal footer --> */}
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-outline-primary" >Save</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}
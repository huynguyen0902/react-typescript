import * as React from 'react';
import { Patient } from './Data';
import {  Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from 'src';


// tslint:disable-next-line:no-empty-interface
interface StateProps {
    
}

interface OwnProps {
    patient: Patient;
}

interface DispatchProps {
    onDelete: (patientID: number)=> void;
}

type IProps = OwnProps & StateProps & DispatchProps

interface IState{
    isRedirect: boolean;
}

class RowContent extends React.Component<IProps, IState>{
    constructor(props: IProps){
        super(props);
        this.state = {
            isRedirect: false
        }
    }
    public onClick = () => {
        this.props.onDelete(this.props.patient.patientId);
    }
    public confirmView = () => {
        if(confirm("Select this patient")){
            this.setState({
                isRedirect: true
            })
        }
        else{
            this.setState({
                isRedirect: false
            })
        }
    }
    public render(){
        const isRedirect: boolean = this.state.isRedirect;
        if(isRedirect){
            return (<Redirect to={"patient/" + this.props.patient.patientId} />)
        }
        return(
            <tr> 
                <td>{this.props.patient.status}</td>
                <td>{this.props.patient.patientId}</td>
                <td>{this.props.patient.chart}</td>
                <td>{this.props.patient.patientName}</td>
                <td>{this.props.patient.dob}</td>
                <td>{this.props.patient.gender}</td>
                <td>{this.props.patient.ssn}</td>
                <td>{this.props.patient.address}</td>
                <td>{this.props.patient.phone}</td>
                <td>
                    {/* <Link to={"/Confirm/" + this.props.patient.patientId}>
                        <button type="button" className="btn btn-success">View</button>
                    </Link> */}
                    <button onClick={this.confirmView} type="button" className="btn btn-success">View</button>
                    <button onClick={this.onClick} type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => {
    return{
        onDelete: (patientID: number) => {
            dispatch({
                type: "DELETE",
                patientID: patientID
            });
        }
    }
}
export default connect(null, mapDispatchToProps)(RowContent);
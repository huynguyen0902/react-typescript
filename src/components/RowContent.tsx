import * as React from 'react';
import { Patient } from './Data';
import { Link } from 'react-router-dom';

interface IProps{
    patient: Patient;
}
class RowContent extends React.Component<IProps, {}>{
    public render(){
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
                    <Link to={"/Confirm/" + this.props.patient.patientId}>
                        <button type="button" className="btn btn-danger">View</button>
                    </Link>
                </td>
            </tr>
        );
    }
}
export default RowContent;
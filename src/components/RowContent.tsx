import * as React from 'react';
interface IProps{
    patient: any;
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
                <td>{this.props.patient.action}</td>
            </tr>
        );
    }
}
export default RowContent;
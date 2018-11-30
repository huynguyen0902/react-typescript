import * as React from 'react';
import RowContent from './RowContent';
import { Patient } from './Data';
import { connect } from 'react-redux';
import { IState } from 'src';
interface IProps{
    patients: Patient[];
    isFilter: boolean;
    filterFirstName: string;
}
class TableContent extends React.Component<IProps, {}>{
    public render(){
        let listPatient: Patient[] = this.props.patients;
        const isFilter: boolean = this.props.isFilter;
        const filterFirstName: string = this.props.filterFirstName;
        if(isFilter){
            listPatient = listPatient.filter((patient: Patient) => {
                return patient.patientName.toLowerCase().indexOf(filterFirstName) !== -1;
            });
        }
        const elements = listPatient.map((item: Patient, index: number) => {
            return <RowContent patient={item} key={index} />
        }); 
        return(
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Patient ID</th>
                            <th>Chart #</th>
                            <th>Patient Name</th>
                            <th>DOB</th>
                            <th>Gender</th>
                            <th>SSN</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elements}
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps = (state: IState) =>{
    return {
        patients: state.patients,
        isFilter: state.isFilter,
        filterFirstName: state.filterFirstName
    }
}
export default connect(mapStateToProps, null)(TableContent);
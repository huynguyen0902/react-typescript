import * as React from 'react';
import RowContent from './RowContent';
import { Patient } from './Data';
interface IProps{
    patients: Patient[];
}
class TableContent extends React.Component<IProps, {}>{
    public render(){
        const elements = this.props.patients.map((item: Patient, index: number) => {
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
export default TableContent;
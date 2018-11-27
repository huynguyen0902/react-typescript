import * as React from 'react';
import RowContent from './RowContent';
interface IProps{
    patients: any;
}
class TableContent extends React.Component<IProps, {}>{
    public render(){
        let elements: any = this.props.patients.map((item: any, index: any) => {
            return <RowContent patient={item} key={index} />
        });
        return(
            <div className="container">
                <table className="table table-hover">
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
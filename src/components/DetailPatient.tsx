import * as React from "react";
import { data, Patient } from './Data';
interface IProps{
    match :{params :{id: string}}
}
class DetailPatient extends React.Component<IProps, {}>{
    public render() {
        const patientID: number = parseInt(this.props.match.params.id, 10);
        const patientList: Patient[] = data;
        const numberPatients: number = patientList.length;
        let patient: Patient | undefined;
        // // tslint:disable-next-line:no-console
        // console.log("typeof ",typeof patientID);
        for(let i: number = 0; i < numberPatients; i++){
            if(patientID === patientList[i].patientId){
                patient = patientList[i];
                // tslint:disable-next-line:no-console
                console.log("typeof ",patient);
                break
            }
        }

        // const patient = patientList.find(n => n.patientId === patientID);

        return (
            <div>
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h3 className="panel-title">PatientID {}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="col-xs-2">
                            <div className="input-group">
                                <span className="label label-danger">Patient ID</span>
                                <input type="text" className="form-control" value={patient && patient.patientId} />      
                            </div>
                        </div>
                        
                        <div className="col-xs-2">
                            <div className="input-group">
                                <span className="label label-danger">Patient Name</span>
                                <input type="text" className="form-control" />      
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            
        );
    }
}
export default DetailPatient;
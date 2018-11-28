import * as React from 'react'
import { Link } from 'react-router-dom';
// interface match{
//     params: {id :string}
// }
interface IProps{
    match :{params :{id: number}}
}
class PatientInfo extends React.Component<IProps, {}>{
    public render(){
        // // tslint:disable-next-line:no-console
        // console.log(this.props.match.params.id);
        return(
            <div>
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h3 className="panel-title">Confirmation</h3>
                    </div>
                    <div className="panel-body">
                        <h3>
                            Please confirm select this patient
                        </h3>
                        
                        <div className="input-group">
                            <Link to={"/DetailPatient/" + this.props.match.params.id}><button type="button" className="btn btn-success">Yes, select this patient</button></Link>
                            <button type="button" className="btn btn-danger">No</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default PatientInfo;
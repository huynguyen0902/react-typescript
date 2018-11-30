import * as React from "react";
import { Redirect } from 'react-router';
// import { data, Patient } from './Data';
interface IProps{
    match :{params :{id: string}}
}
interface IState{
    isEdit: boolean
}
class Patient extends React.Component<IProps, IState>{
    constructor(props: IProps){
        super(props);
        this.state = {
            isEdit: false
        }
    }
    public onClick = () => {
        this.setState({
            isEdit: true
        })
    }
    public render() {
        const patientID: number = parseInt(this.props.match.params.id, 10);
        // const patientList: Patient[] = data;
        // const patient: Patient | undefined = patientList.find((patient) =>{
        //     return patient.patientId === patientID
        // });
        const isEdit: boolean = this.state.isEdit;
        if(isEdit){
            return <Redirect to={"/edit/patient" + patientID} />
        }
        return (
            <div>
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h3 className="panel-title">Patient demographic</h3>
                    </div>
                    <div className="panel-body">
                        <div id="PERSON INFORMATION">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Personal Information</h3>
                                </div>
                                <div className="panel-body">
                                    
                                    <div className="col-xs-3 col-sm-3 col-md-4 col-lg-4">
                                        <table className="table table-bordered table-hover">
                                            <tbody>
                                                <tr>
                                                    <td>First:  </td>
                                                </tr>
                                                <tr>
                                                    <td>Gender:  </td>
                                                </tr>
                                                <tr>
                                                    <td>SSN:  </td>
                                                </tr>
                                                <tr>
                                                    <td>Adress:  </td>
                                                </tr>
                                                <tr>
                                                    <td>Home:  </td>
                                                </tr>
                                                <tr>
                                                    <td>Work:  </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                        <table className="table table-bordered table-hover">
                                            <tbody>
                                                <tr>
                                                    <td>Middel:  </td>
                                                </tr>
                                                <tr>
                                                    <td>Marital status:  </td>
                                                </tr>
                                                <tr>
                                                    <td>Ethnicity:  </td>
                                                </tr>
                                                <tr>
                                                    <td>City:  </td>
                                                </tr>
                                                <tr>
                                                    <td>Mobile:  </td>
                                                </tr>
                                                <tr>
                                                    <td>Fax:  </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                        <table className="table table-bordered table-hover">
                                            <tbody>
                                                <tr>
                                                    <td>Last:  </td>
                                                </tr>
                                                <tr>
                                                    <td>Date of  birth:  </td>
                                                </tr>
                                                <tr>
                                                    <td>Language:  </td>
                                                </tr>
                                                <tr>
                                                    <td>State:  </td>
                                                </tr>
                                                <tr>
                                                    <td>Email:  </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>  
                        <div id="EMERGENCY CONTACT">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title"> Emergency Contact</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                        <table className="table table-hover table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td>Name:</td>
                                                </tr>
                                                <tr>
                                                    <td>Address:</td>
                                                </tr>
                                                <tr>
                                                    <td>Home:</td>
                                                </tr>
                                                <tr>
                                                    <td>Work:</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                        <table className="table table-hover table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td>Relatetionship:</td>
                                                </tr>
                                                <tr>
                                                    <td>City:</td>
                                                </tr>
                                                <tr>
                                                    <td>Mobile:</td>
                                                </tr>
                                                <tr>
                                                    <td>Fax:</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                        <table className="table table-hover table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td>State:</td>
                                                </tr>
                                                <tr>
                                                    <td>Email:</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                        <table className="table table-hover table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td>Zip:</td>
                                                </tr>
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div id="EMPLOYER CONTACT">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Employer Contact</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                        <table className="table table-hover table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td>Employer:</td>
                                                </tr>
                                                <tr>
                                                    <td>Address:</td>
                                                </tr>
                                                <tr>
                                                    <td>Phone:</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                        <table className="table table-hover table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td>City:</td>
                                                </tr>
                                                <tr>
                                                    <td>Fax:</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                        <table className="table table-hover table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td>State:</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                        <table className="table table-hover table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td>Zip:</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div id="FACILITY/STATUS">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Facility/status</h3>
                                </div>
                                <div className="panel-body">
                                    <table className="table table-hover table-bordered">
                                        <tbody>
                                            <tr>
                                                <td>Chart#</td>
                                            </tr>
                                            <tr>
                                                <td>Assigned Facility</td>
                                            </tr>
                                            <tr>
                                                <td>Assigned PCP</td>
                                            </tr>
                                            <tr>
                                                <td>Status</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="btn-group">
                            <button onClick={this.onClick} type="button" className="btn btn-success">EDIT</button>
                            <button type="button" className="btn btn-danger">CANCLE</button>
                        </div>
                    </div>
                </div>
                
            </div>      
        );
    }
}
export default Patient;
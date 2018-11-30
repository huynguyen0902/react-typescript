import * as React from "react";
interface IProps{
    match :{params :{id: string}}
}
class PatientEdit extends React.Component<IProps, {}>{
    public render() {
        // const patientID: number = parseInt(this.props.match.params.id, 10);
        // const patientList: Patient[] = data;
        // const patient: Patient | undefined = patientList.find((patient) =>{
        //     return patient.patientId === patientID
        // });
        return (
            <div>
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h3 className="panel-title">Patient Edit</h3>
                    </div>
                    <div className="panel-body">
                        <div id="PERSON INFORMATION">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Personal Information</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                        <div className="input-group">
                                            <span className="label label-success">First</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="input-group">
                                            <span className="label label-success">Gender</span> 
                                            <select className="form-control" >
                                                <option value="MALE">MALE</option>
                                                <option value="FEMALE">FEMALE</option>
                                                <option value="UNKNOW">UNKNOW</option>
                                            </select>
                                        </div> 
                                        <div className="input-group">
                                            <span className="label label-success">SSN</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="input-group">
                                            <span className="label label-success">Address</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="input-group">
                                            <span className="label label-success">Home</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="input-group">
                                            <span className="label label-success">Work</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>

                                    
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                        <div className="input-group">
                                            <span className="label label-success">Middel</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="input-group">
                                            <span className="label label-success">Marital status</span> 
                                            <input type="text" className="form-control" />
                                        </div> 
                                        <div className="input-group">
                                            <span className="label label-success">Ethnicity</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="input-group">
                                            <span className="label label-success">City</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="input-group">
                                            <span className="label label-success">Mobile</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="input-group">
                                            <span className="label label-success">Fax</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    

                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                        <div className="input-group">
                                            <span className="label label-success">Last</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="input-group">
                                            <span className="label label-success">Date of birth</span> 
                                            <input type="text" className="form-control" />
                                        </div> 
                                        <div className="input-group">
                                            <span className="label label-success">Language</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="input-group">
                                            <span className="label label-success">State</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="input-group">
                                            <span className="label label-success">Email</span>
                                            <input type="text" className="form-control" />
                                        </div>
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
                                        <div className="input-group">
                                            <span className="label label-success">Name</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="input-group">
                                            <span className="label label-success">Address</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="input-group">
                                            <span className="label label-success">Home</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="input-group">
                                            <span className="label label-success">Work</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                        <div className="input-group">
                                            <span className="label label-success">Relatetionship</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="input-group">
                                            <span className="label label-success">City</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="input-group">
                                            <span className="label label-success">Mobile</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="input-group">
                                            <span className="label label-success">Fax</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                        <div className="input-group">
                                            <span className="label label-success">State</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="input-group">
                                            <span className="label label-success">Email</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                        <div className="input-group">
                                            <span className="label label-success">Zip</span>
                                            <input type="text" className="form-control" />
                                        </div>
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
                                        <div className="input-group">
                                            <span className="label label-success">Employer</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="input-group">
                                            <span className="label label-success">Address</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="input-group">
                                            <span className="label label-success">Phone</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                        <div className="input-group">
                                            <span className="label label-success">City</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="input-group">
                                            <span className="label label-success">Home</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                        <div className="input-group">
                                            <span className="label label-success">State</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                        <div className="input-group">
                                            <span className="label label-success">Zip</span>
                                            <input type="text" className="form-control" />
                                        </div>
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
                                    
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                        <div className="input-group">
                                            <span className="label label-success">Chart#</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="input-group">
                                            <span className="label label-success">Assigned Facility</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="input-group">
                                            <span className="label label-success">Assigned PCP</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="input-group">
                                            <span className="label label-success">Status</span>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <div className="btn-group btn-group-justified">
                                <a className="btn btn-success">SAVE</a>
                                <a className="btn btn-danger">CANCLE</a>
                            </div>
                        </div>    
                    </div>
                </div>
                
            </div>      
        );
    }
}
export default PatientEdit;
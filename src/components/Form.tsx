import * as React from 'react';
interface IProps{
    get: any;
    filter: any;
}
interface IState{
    isGet: any;
    filterName: string;
    filterLastName: string;

}
class Form extends React.Component<IProps, IState>{
    constructor(props: any){
        super(props);
        this.state = {
            isGet: false,
            filterName : "",
            filterLastName: ""
        }
    }
    public onClick = () => {
        setTimeout(()=>{
            this.setState({
                isGet: !this.state.isGet
            });
            this.props.get(true);
        }, 2000)
        
    }
    public onChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            filterName: name === "filterName" ? value : this.state.filterName,
            filterLastName: name === "filterLastName" ? value : this.state.filterLastName
        })
        this.props.filter(
            name === "filterName" ? value: this.state.filterName,
            name === "filterLastName" ? value: this.state.filterLastName
        );
        
    }
    public render(){
        // console.log("state", this.state);
        return(
            <div className="container">
                <div className="container">
                    <div className="form-group col-xs-4">
                            <label className="control-label" htmlFor="facility">Facility</label>
                            <select  className="form-control" id="facility">
                                <option value="">1</option>
                            </select>
                    </div>  
                </div>
                <div className="col-xs-10">
                    <div className="form-group col-xs-2">
                            <label className="control-label" htmlFor="firstname">First name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="filterName"
                                // value={this.state.filterName}
                                onChange={this.onChange}
                            /> 
                    </div>
                    <div className="form-group col-xs-2">
                            <label className="control-label" htmlFor="lastname">Last name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="filterLastName" 
                                onChange={this.onChange}
                            /> 
                    </div>
                    <div className="form-group col-xs-2">
                            <label className="control-label" htmlFor="dob">DOB</label>
                            <input type="text" className="form-control" id="dob" /> 
                    </div>
                    <div className="form-group col-xs-2">
                            <label className="control-label" htmlFor="patientid">Patient ID</label>
                            <input type="text" className="form-control" id="patientid" /> 
                    </div>
                    <div className="form-group col-xs-2">
                            <label className="control-label" htmlFor="char#">Chart #</label>
                            <input type="text" className="form-control" id="char#" /> 
                    </div>
                    <div className="form-group col-xs-2">
                            <label className="control-label" htmlFor="ssn">SSN</label>
                            <input type="text" className="form-control" id="ssn" /> 
                    </div>
                </div>
                <div className="col-xs-2">
                    <div className="form-group col-xs-1">
                        <label className="control-label" htmlFor="btnClear">Clear</label>
                        <button type="button" className="btn btn-primary" id="btnClear">Clear search</button>
                    </div>  
                </div>
                <div className="container">
                    <div className="col-xs-2">
                        <button type="button" className="btn btn-danger" onClick={this.onClick}>Get Data</button>
                    </div>
                    
                    
                </div>
                
            </div>
        );
    }
}
export default Form;
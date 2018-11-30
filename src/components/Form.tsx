import * as React from 'react';
import { Dispatch } from 'redux';
import {Action} from 'src/index'
import { connect } from 'react-redux';
// interface IProps{
//     filter: (firstName: string, lastName: string) => void;
// }
interface IState{
    isGet: boolean;
    filterName: string;
    filterLastName: string;

}
interface IProps {
    filterFirstName: (filterFirstName: string) => void
}
class Form extends React.Component<IProps, IState>{
    constructor(props: IProps){
        super(props);
        this.state = {
            isGet: false,
            filterName : "",
            filterLastName: ""
        }
    }
    public onChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        // const name = event.target.name;
        const value = event.target.value;
        this.props.filterFirstName(value);
        // this.setState({
        //     filterName: name === "filterName" ? value : this.state.filterName,
        //     filterLastName: name === "filterLastName" ? value : this.state.filterLastName
        // })

        
    }
    public render(){
        return(
            <div>
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
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>) =>{
    return {
        filterFirstName: (filterFirstName: string) =>{
            dispatch({
                type: "FILTER_FIRST_NAME",
                filterFirstName: filterFirstName
            })
        }
    }
}
export default connect(null, mapDispatchToProps) (Form);
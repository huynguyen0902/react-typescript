import * as React from 'react';
import './App.css';
import Header from './Header';
import Form from './Form';
import TableContent from './TableContent';
import { data } from './Data';
// import { BrowserRouter as Router} from "react-router-dom";


interface IState{
  patients:any[];
  isGet: boolean;
  filter: any[];
  
}
class App extends React.Component<{}, IState> {
  constructor(props: any){
    super(props);
    this.state = {
      patients: data,
      isGet: false,
      filter:[
        {
          filterName: "",
          filterLastName: ""
        }
      ]
    }
  }
  public getdata = (isGet:boolean) => {
    this.setState({
      isGet: !this.state.isGet
    })
  }
  public filter = (filterName: string, filterLastName: string) => {
    this.setState({
      filter:[
        {
          filterName,
          filterLastName
        }
      ]
    })
  }
  public render() {
    // tslint:disable-next-line:no-console
    console.log("state", this.state);
    let patients: any = this.state.patients;
    const isGet: boolean = this.state.isGet;
    const filter: any = this.state.filter;
    if(filter[0].filterName){
      patients = patients.filter((patient: any) =>{
        return patient.patientName.toLowerCase().indexOf(filter[0].filterName) !== -1
      });
      
    }
    
    
    return (

      <div className="container">
        <Header />
        <Form get={this.getdata} filter={this.filter} />
        <TableContent patients= {isGet === true? patients: []}/>
      </div>

 
    );
  }
}

export default App;

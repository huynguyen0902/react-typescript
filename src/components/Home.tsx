import * as React from 'react';
import './Home.css';
import Header from './Header';
import { data, Patient } from './Data';
import Form from './Form';
import TableContent from './TableContent';

interface IState{
  patients:Patient[];
  isGet: boolean;
  filterFirstName: string;
  filterLastName: string;
  
}
class App extends React.Component<{}, IState> {
  constructor(props: {}){
    super(props);
    this.state = {
      patients: [],
      isGet: false,
      filterFirstName: "",
      filterLastName: ""
    }
    this.apiGetPatient().then((patients) => {
      // tslint:disable-next-line:no-console
      this.setState({
        patients: patients,
        isGet: true
      });
    });
  }

  public filter = (firstName: string, lastName: string) => {
    this.setState({
      filterFirstName: firstName,
      filterLastName: lastName
    })
  }
  public apiGetPatient = (): Promise<Patient[]> => {
    return new Promise((resolve) => {
      const patients: Patient[] = data;
      setTimeout(() => {
        resolve(patients)
      }, 3000)
    })
  }

  public render() {
    // // tslint:disable-next-line:no-console
    // console.log("state", this.state);
    // this.apiGetPatient().then((patients) => {
    //   // tslint:disable-next-line:no-console
    //   console.log(patients)
    // });
    // const isGet: boolean = this.state.isGet;
    // const filterFirstName: string = this.state.filterFirstName;
    // if(filterFirstName){
    //   patients = patients.filter((patient: Patient) =>{
    //     return patient.patientName.toLowerCase().indexOf(filterFirstName) !== -1
    //   });
      
    // }
    return (
        <div>
          <Header />
          <div id={this.state.isGet === false? "loader": "asd"} />
          <Form filter={this.filter} />
          <TableContent patients= {this.state.patients}/>
        </div>
    );
  }
}

export default App;

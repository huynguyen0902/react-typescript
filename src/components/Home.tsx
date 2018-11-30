import * as React from 'react';
import './Home.css';
import Header from './Header';
import { data, Patient } from './Data';
import Form from './Form';
import TableContent from './TableContent';
import { Dispatch } from 'redux';
import { Action } from 'src';
import { connect } from 'react-redux';
// interface IState{
//   patients:Patient[];
//   isGet: boolean;
//   filterFirstName: string;
//   filterLastName: string;
  
// }
// tslint:disable-next-line:no-empty-interface
interface IStateToProps{
  isLoad: boolean;
}
interface IDispatchToProps{
  showPatients: (patients: Patient[], isLoad: boolean) => void;
}
type IProps = IStateToProps & IDispatchToProps;

class Home extends React.Component<IProps, {}> {
  constructor(props: IProps){
    super(props);
    this.apiGetPatient().then((patients) => {
      this.props.showPatients(patients, false);
    });
  }

  // public filter = (firstName: string, lastName: string) => {
  //   this.setState({
  //     filterFirstName: firstName,
  //     filterLastName: lastName
  //   })
  // }
  public apiGetPatient = (): Promise<Patient[]> => {
    return new Promise((resolve) => {
      const patients: Patient[] = data;
      setTimeout(() => {
        resolve(patients)
      }, 1000)
    })
  }

  public render() {
    return (
        <div>
          <Header />
          <div  id={this.props.isLoad === true? "loader": "notload"} />
          <Form/>
          <TableContent />
        </div>
    );
  }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>) =>{
  return{
    showPatients :(patients: Patient[], isload: boolean) => {
      dispatch({
        type: 'PATIENTS_LIST',
        listPatients: patients,
        isLoad: isload
      })
    }
  };
}
const mapStateToProps = (state: IStateToProps) => {
  return {
    isLoad: state.isLoad
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

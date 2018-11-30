import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import { Patient } from './components/Data';
export interface IState{
  patients:Patient[];
  isFilter: boolean;
  isLoad: boolean;
  filterFirstName: string;
  filterLastName: string;
  
}
let initialState: IState = {
  patients: [],
  isFilter: false,
  isLoad: true,
  filterFirstName: "",
  filterLastName: ""
};

export type Action = {
  type: 'DELETE',
  patientID: number,
} | {
  type: 'UPDATE',
  patientName: string,
} | {
  type: 'PATIENTS_LIST',
  listPatients: Patient[],
  isLoad: boolean
} | {
  type: "FILTER_FIRST_NAME",
  filterFirstName: string
}

const myReducer = (state: IState = initialState, action: Action) =>{
  if(action.type === 'DELETE'){
    return {
        ...state,
        patients: state.patients.filter(n => n.patientId !== action.patientID)        
      }

  }
  if(action.type === 'PATIENTS_LIST'){
    return{
      ...state,
      patients: action.listPatients,
      isLoad: action.isLoad
    };
  }
  if(action.type === "FILTER_FIRST_NAME"){
    return {
      ...state,
      isFilter: true,
      filterFirstName: action.filterFirstName
    }
  }
  return state;
}
const store = createStore(myReducer);
store.dispatch({type: ""} as {} as Action);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

import * as React from "react";
import Home from './components/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Patient from './components/Patient';
import PatientEdit from './components/PatientEdit';
class App extends React.Component{
    public render() {
        return (
            <Router>
                <div className="container">
                    <Route path="/" exact = {true} component={Home} />
                    <Route path="/patient/:id" component={Patient} /> 
                    <Route path="/edit/patient:id" component={PatientEdit} />
                </div>
            </Router>
            
        );
    }
}
export default App;
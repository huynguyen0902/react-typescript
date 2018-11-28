import * as React from "react";
import Home from './components/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Confirm from './components/Confirm';
import DetailPatient from './components/DetailPatient';
class App extends React.Component{
    public render() {
        return (
            <Router>
                <div className="container">
                    <Route path="/" exact = {true} component={Home} />
                    <Route path="/Confirm/:id" component={Home} />
                    <Route path="/Confirm/:id" component={Confirm} />
                    <Route path="/DetailPatient/:id" component={DetailPatient} /> 
                </div>
            </Router>
            
        );
    }
}
export default App;
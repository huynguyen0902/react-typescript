import * as React from 'react';
interface IState{
    date: Date;
}
class Header extends React.Component<{}, IState> {
    public timerID: any;
    constructor(props: any){
        super(props);
        this.state = {
            date: new Date()
        };
    }
    public componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    public componentWillMount(){
        clearInterval(this.timerID);
    }
    public tick() {
        this.setState({
            date: new Date()
        });
    }
    public render(){
        return(
            <div className="time">{this.state.date.toLocaleTimeString()}</div>
        );
    }
}
export default Header;
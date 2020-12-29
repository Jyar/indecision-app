
class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            toggle: false,
            toggleB: 'false'
            
        };
    }
    handleToggle(){
        
        this.setState((prevState) => {
            if (prevState.toggleB == 'false'){
                prevState.toggleB = 'true';
            } else {
                prevState.toggleB = 'false';
            }
            return {
                toggle: !prevState.toggle,
                toggleB: prevState.toggleB

            };
            
        });

    }
  
    render(){
        return (
            <div>
            <h1>Toggle Boolean: {this.state.toggleB}</h1>
            <button onClick= {this.handleToggle} id= "toggle" className="button"> toggle </button>
            <p>{this.state.toggle &&  'toggled'}</p>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


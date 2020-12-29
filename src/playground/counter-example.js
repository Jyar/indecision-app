
class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0, //props.count,
            
        };
    }

    componentDidMount(){
        //fetch data
        console.log("mount");
        try{
         const json = localStorage.getItem('count');
         const count = JSON.parse(json);
         console.log(count);
            if (count){
                this.setState(() => ({count}));
            }
          } catch (e){
            //do nothing
          }
      }
      componentDidUpdate(prevProps, prevState){ 
          //saving data
          if (prevState.count !== this.state.count){
            const json = JSON.stringify(this.state.count);
            localStorage.setItem("count", json);
          }
        console.log('update');
      }

    handleAddOne(){
        
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
            
        });

    }
    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
            
        });
    }
    handleReset(){
        this.setState((prevState) => {
            return {
                count: 0
            };
            
        });
    }
    render(){
        return (
            <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick= {this.handleAddOne} id= "addOne" className="button"> +1 </button>
            <button onClick= {this.handleMinusOne} id= "minusOne" className="button"> -1 </button>
            <button onClick= {this.handleReset} id= "reset" className="button"> reset </button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count: 0
// };

ReactDOM.render(<Counter />, document.getElementById('app'));


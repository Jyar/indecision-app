
const obj = {
    name: 'Vikram',
    getName(){
        return this.name;
    }
};

//stateless functional component

class IndecisionApp extends React.Component{
  constructor(props){
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.state = {
          options: props.options
      }
  }
  componentDidMount(){
    //fetch data
    console.log("mount");
    try{
     const json = localStorage.getItem('options');
     const options = JSON.parse(json);
     console.log(options);
        if (options){
            this.setState(() => ({options}));
        }
      } catch (e){
        //do nothing
      }
  }
  componentDidUpdate(prevProps, prevState){ 
      //saving data
      if (prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
      }
    console.log('update');
  }
  componentWillUnmount(){
    
  }

  handleDeleteOptions(){
    this.setState(() => ({options: []}));
  }

  handleDeleteOption(optionToRemove){
    this.setState((prevState) => ({options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  handlePick(){
    this.setState((prevState) => {
        const randomNum = Math.floor(Math.random() * prevState.options.length);
        const option = prevState.options[randomNum];
        alert(option);
        
    });
  }
    handleAddOption(option){
        if (!option){
            return 'Error: Enter Valid value to add an item';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        this.setState((prevState) => ({
                    options: prevState.options.concat([option])
                })
            );
    }

    render(){
        const subtitle = "Put your life in the hands of a computer2"
        return (
            <div>
            <Header subtitle={subtitle}/>
            <Action 
                hasOptions={this.state.options.length > 0}
                handlePick = {this.handlePick}
            />
            <Options 
                options={this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
            />
            <AddOption 
                handleAddOption = {this.handleAddOption} 
            />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePick}>What Should i do?</button>
        </div>
    );
};

const Options = (props) => {
    let options = props.options;
    return (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add an option to get started</p>}
        {
            options.map((option) =>  (
                <Option 
                    key={option} 
                    optionText ={option} 
                    handleDeleteOption = {props.handleDeleteOption}
                /> 
            ))
        }
    </div>
    );
};

const Option = (props) => {
    return (
        <div>
            options: {props.optionText}
            <button onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
                >

                remove
            </button>
        </div>
        );
};

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState( () => ({ error }));

        if (!error){
            e.target.elements.option.value = '';
        }

        
    }
    render(){
        return (
            <div>
                {this.state.error && <p> {this.state.error} </p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button> Add Option </button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
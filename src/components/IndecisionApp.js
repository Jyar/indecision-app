import React from 'react'
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component{
    state = {
        options: this.props.options,
        selectedOption: undefined
    };

    clearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}));
    };
    handleDeleteOptions = (e) => {
        this.setState(() => ({options: []}));
      };
    
      handleDeleteOption= (optionToRemove) => {
        this.setState((prevState) => ({options: prevState.options.filter((option) => optionToRemove !== option)
        }));
      };
    
      handlePick = (e) => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
           selectedOption: option      
        }));
      };

    //ES6 methods vs class methods/ arrow functions
    handleAddOption = (option) => {
        if (!option){
            return 'Error: Enter Valid value to add an item';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        this.setState((prevState) => ({
                    options: prevState.options.concat([option])
                })
            );
    };

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
  
      render(){
          const subtitle = "Put your life in the hands of a computer"
          return (
              <div>
              <Header subtitle={subtitle}/>
              <div className="container">
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick = {this.handlePick}
                />
                <div className="widget">
                  <Options 
                      options={this.state.options}
                      handleDeleteOptions = {this.handleDeleteOptions}
                      handleDeleteOption = {this.handleDeleteOption}
                  />
                  <AddOption 
                      handleAddOption = {this.handleAddOption} 
                  />
                </div>
              </div>
              <OptionModal 
              selectedOption = {this.state.selectedOption}
              clearSelectedOption = {this.clearSelectedOption}
              />
              </div>
          );
      }
  }
  
  IndecisionApp.defaultProps = {
      options: []
  };


  export default IndecisionApp;
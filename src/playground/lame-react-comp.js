// class Option extends React.Component{
//     render(){
//         return (
//         <div>
//             options: {this.props.optionText}
//         </div>
//         );
//     }
// }

// class Options extends React.Component{
//     render(){
//         let options = this.props.options;
//         return (
//         <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//             {
//                 options.map((option) => <Option key={option} optionText ={option} /> )
//             }
//         </div>
//         );
//     }
// }

// class Action extends React.Component{
//     render(){
//         return (
//             <div>
//                 <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What Should i do?</button>
//             </div>
//         );
//     }
// }

// class Header extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }

// }
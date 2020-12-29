console.log('running');
const app = {
    title : 'indecision app',
    subtitle : 'hands of a computer',
    //location: 'VA'
    options : []
}

const onFormSubmit = (e) =>{
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderOptionApp();
    }
}

const removeAll = () => {
    app.options = [];
    renderOptionApp();
}
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}
const appRoot = document.getElementById('app');


const renderOptionApp = () => {
    //JSK - Javascript XML 
    const template = (
    <div>
        <h1> {app.title}  </h1>
        {app.subtitle && <p>{ app.subtitle }</p> }
        <p>{app.options.length > 0 ? 'Here are options' : 'no options'}</p>
        
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
        <button onClick= {removeAll}> Remove All</button>
        
        <ol>
            {
                app.options.map( (option) => <li key={option}> Option: {option}</li>)
            }
        </ol>

        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button> Add Option </button>
        </form>
       
    </div>
    );
    
    ReactDOM.render(template, appRoot);
};



renderOptionApp();
const app = {
    title: 'Visibility Toggle',
    toggle: true,
    
}

const onToggle = () =>{
   
    
    
        app.toggle = !app.toggle;
    

    renderOptionApp();
}
const appRoot = document.getElementById('app');

const renderOptionApp = () => {
    //JSK - Javascript XML 
    const template = (
    <div>
        <h1> {app.title}  </h1>
       
        
        <button onClick={onToggle}>
         {app.toggle ? 'Toggle' : 'toggleeed'}
        </button>
        
        <p>{app.toggle &&  'toled'}</p>

       
    </div>
    );
    
    ReactDOM.render(template, appRoot);
};



renderOptionApp();
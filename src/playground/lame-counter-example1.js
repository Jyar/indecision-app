
let count = 0;
const addOne = () =>{
    count = count + 1;
    renderCounterApp();
};
const minusOne = () =>{
    count = count - 1;
    renderCounterApp();
};
const reset = () =>{
    count = 0;
    renderCounterApp();
};



const appRoot = document.getElementById('app');


const renderCounterApp = () => {
    
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick= {addOne} id= "addOne" className="button"> +1 </button>
            <button onClick= {minusOne} id= "minusOne" className="button"> -1 </button>
            <button onClick= {reset} id= "reset" className="button"> reset </button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);

}

renderCounterApp();
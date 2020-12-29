const square = function (x) {
    return x * x;
}

function square2(x){
    return x * x;
}

// anonymous function
// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(4));

//Challenge use arrow functions 
// get first name 

const getFirstName = (fullName) => {
   return  fullName.split(' ')[0];
}

const getFirstName2 = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Bob Saggit') + getFirstName2('Saggit'))
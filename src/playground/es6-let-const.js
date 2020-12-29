var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'frank';
console.log('nameConst', nameConst);

function getPetName(){
    var petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);

//Block level scoping = let and const 
var fullName = 'Jordan T';
if (fullName){
    var firstName = fullName.split(' ')[0];
    console.log('firstname', firstName);
}

console.log(firstName);
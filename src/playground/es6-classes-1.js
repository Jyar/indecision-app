//Car 
//make
//model
//vin
//getDescription 



class Person {
    constructor(name = 'anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if (this.hasMajor()){
            return description += ` and their major is ${this.major}`
        }
        return description;
    }
}
class Traveler extends Person {
    constructor(name,age, location){
        super(name,age);
        this.location = location;
    }
    getDescription(){
        return this.location;
    }
}

const me = new Student('Andrew', 2, 'Computer Science');
const you = new Traveler('Andrew', 2, 'Boston');

console.log(me.getGreeting());
console.log(you.getDescription());
console.log(me.hasMajor());
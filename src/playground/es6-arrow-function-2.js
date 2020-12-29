// arguments object - no longer bound with arrow functions

// arguments work below
// const add = function (a , b){
//     console.log(arguments);
// return a + b;
// }

// arguments dont work
const add = (a ,b) => {
    //console.log(arguments);
    return a + b;
}


console.log(add('yes','no'));
// this keyword - no longer bound 

const user = {
    name: 'Andrew',
    cities: ['PA', 'NYC', 'Dublin'],
    printPlacesLived : function(){
        console.log(this.name)
            console.log(this.cities)


            // this wont work
            // this.cities.forEach(function (city){
            //     console.log(this.name + 'has lived in ' + city);
            // });

            //this works
            this.cities.forEach( (city) => {
                console.log(this.name + ' has lived in ' + city);
            });
    },

    //causes binding error
    // printPlacesLived2 : () => {
    //     console.log(this.name)
    //         console.log(this.cities)


    //         // this wont work
    //         // this.cities.forEach(function (city){
    //         //     console.log(this.name + 'has lived in ' + city);
    //         // });

    //         //this works
    //         this.cities.forEach( (city) => {
    //             console.log(this.name + ' has lived in ' + city);
    //         });
    // },

    // works
    // printPlacesLived3() {
    //         this.cities.forEach( (city) => {
    //             console.log(this.name + ' has lived in ' + city);
    //         });
    // }
    printPlacesLived4(){
            return this.cities.map((city) => this.name + ' has lived in ' + city);
        }
    
}
console.log(user.printPlacesLived4());

const multiplier = {
    //numbers
    //multiply
    numbers: [2,4,5],
    by: 2,
    multiply(){
        return this.numbers.map((num) => this.by * num);
    }


};

console.log(multiplier.multiply());
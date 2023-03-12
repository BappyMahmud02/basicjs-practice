//1.  how to declare a variable using let and const .
const fatherName = 'badal' ;
let season = 'summer' ;
season = 'winter' ;

// 2. 6 basic condition >,<,===,!==,<=,>= condition .
// multiple conditon : && , || ;
if(fatherName === 'Badal' || season === 'summer'){
    
}
else if(fatherName === 'badal'){

}
else {

}

// 3. Array declare
// index
// length, push,

const numbers = [89, 35, 87, 43] ;
numbers[0] = 56 ;

// 4. for loop 

for (let i = 0 ; i<numbers.length; i++){
    const number = numbers[i] ;
    // console.log(number);
}
// 5. function 
function multiply(num1, num2){
    const result = num1 * num2 ;
    return result ;
}
const output = multiply(2, 2) ;
// console.log(output);

// 6. Object 
// 3 ways to access property by name
const student = {
    name : 'bappy mahmud',
    age : 24,
    profession : ['developer ' , 'designer' ] 
}
const myVariable = 'age' ;
console.log(student.age); //direct by property
console.log(student['age']); //access via property name string
console.log(student[myVariable]); //access via property name  in a variable

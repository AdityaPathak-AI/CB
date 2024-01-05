// Immediately Invoked Function Expression.

function test(){
    console.log('Database connected I');
}
test();

( function life(){
    console.log(`Database Connected II`);
})();

//global scope ke pollution se problem ki wajah se iife use kiya jata hai

((name)=>{
    console.log(`DB Connected III ${name}`);
})('Apache')

//Global Execution Context
//Function Execution Context
//Eval Exceution Context

/* how js code executes

-->Memory Creation [allocated space for variables , memory allocation]
-->Creating Global Execution context
-->VMEM (Virtual Memory)
-->Call Stack --> FILO (First In Last Out)
-->this keyword
-->Variable Environment Record
-->Lexical Enviroment Record

*/

let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1 , val2)
let result2 = addNum(10,2)

// how this code will execute in javascript

/*
1.Global Execution --> this

2. Memory Alllocation Phase
    val1 --> undefined
    val2 --> undefined
    addNum --> definition
            (num1,num2){
    let total = num1 + num2
    return total 
    result 1 --> undefined
    result 2 -->undefined

3. Execution Phase [result 1]
    val1 --> 10
    val2 --> 5
    addNum(...) --> {[Function: addNum]} //new var env + execution thread // again steps will repeat.-->[
        memory phase
        val1 --> undefined
        val2 --> undefined
        total --> undefined
    ]
    execution context -->[
        num 1 --> 10
        num 2 --> 5
        total --> 15// total will return to global execution
        // global execution will get deleted after execution.
    ]
4. Execution Phase [result 2]
 val1 --> 10
    val2 --> 5
    addNum(...) --> {[Function: addNum]} //new var env + execution thread // again steps will repeat.-->[
        memory phase
        val1 --> undefined
        val2 --> undefined
        total --> undefined
    ]
    execution context -->[
        num 1 --> 10
        num 2 --> 5
        total --> 15// total will return to global execution
        // global execution will get deleted after execution.
    ]

*/

/* Call Stack 
Call stack is a mechanism for an interpreter or scripting language processor to keep track of nested function calls

    function one(){
        console.log('one)
    }
    function two(){
        console.log('two)
    }
    function three(){
        console.log('three)
    }
    one()
    two()
    three()
    
    Call stack is a mechanism of the JavaScript runtime that allows you to save and restore the call state
    Call stack is like a real-life call stack in your phone, where you make calls one
    Call stack is a mechanism for an interpreter (like the JavaScript engine in a web browser) to
    Call stack is a mechanism of the JavaScript runtime that allows you to save and restore state within your

*/

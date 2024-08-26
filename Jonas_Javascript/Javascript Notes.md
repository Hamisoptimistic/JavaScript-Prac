https://obsius.site/6g5u235a3o3l5x12520i
https://share.note.sx/gr8875nd#nd3xEFRagnlSVEy0hQIiCtT9c5iBxGOmygHajBLQHn8

## Variables rules
- Should start with valid letters.
- $ sign and _ are allowed in naming convention.
- other special character is not allowed.
- reserved keywords like 'function' and 'new are not allowed'
- Prefer using camelCase
- starting with Capital word is not prefered. it is used for OOP.
- uppercase is for constant.
- make variable descriptive.

## Data Types
- There are 2 types of DataType in Javscript **Primitive and Object**
	- Primitive means that data cannot be changed.
- string, number and boolean are 3 main primimtive data type
- Undefined is a datatype which is assigned to an unassigned variables.
- null is like empty or void datatype.
## if-else statement.
- In if-else statement, the bracket after if i.e if('....') requires a boolean values. Any expression that goes here basically checks for **truthy boolean value**.
- It executes the *if* block only if its truthy value.
- we can save boolean value in a variable and pass it to the 'if' statement.
	- `if (var1){..executes if its truthy value..}` here var1 can hold only true value.
- then `else {..executes if its Falsy values..}` will execute the code if value in *if ()* is a falsy value.
- **Shortcut---->   (condition) ? expression_If_True : expression_If_False;**
- also we can use nested if-else statement. `if (...){ if (...) {}}`

## Type Conversion and Coercion
- We can convert existing type to another using `String()`,`Number()` function.
- **Type conversion**  = when we explicitly convert one type to another type.
- **Type Coercion** = when Javascript converts type for us `eg. + and - operator converting types.`
- `+` operator converts number to string eg. `+ (vairable) converts  
- `- / *` operator converts string to Number.
- Boolean() converts the value to true or false according to truthy and falsy value [[#Truthy and Falsy Value.]]

## Truthy and Falsy Value.
- In Js we have 5 falsy value : 0, "", undefined, null and NaN.
- others are considered as truthy value including empty object {}
- These values are considered as false in conditionals like in if-else statement.

## Equality and Inequality operator.
- in Js we have assignment operator = , then == loose equality opertor, then === strict equality operator.
- Loose equality operator i.e **== does type coercion**. Whereas strict operator **=== does not do any type coercion**.
- Avoid loose == at any cost.
- We also have inequlaity operator i.e !==
	- here also we have **loose != and strict !==**
	- Avoid loose here also.
## Ternary (Conditional ) Operator 
- Ternary opeartor is an expression and works like if-else statement.
- so `condition ? expression1 : expression2` is the syntax of ternary operator.
- Advantage of using ternary operator is that it **produces a value and we can store that value in a variables.**
## Shorthand Property 

- Use **x++** when you need to use the original value of x before incrementing.
- Use **++x** when you need the incremented value immediately.
- [Short-Hand property for increment and decrement](https://javascript.info/operators#increment-decrement)
- [shorthand for same variables](https://javascript.info/operators#modify-in-place) 

## Operator Precedence (inc. Logical)
- [Chat-GPT Operator Precedence](https://chatgpt.com/c/5681d79d-783b-4db5-bfcb-fc792f1f32d3)
- Comparison operator converts string to Number `>, <, >= <=`
## Switch statement
- Alternative to if-else statement.
- we enter variable value in swtich statement i.e `switch(variable)`
- we enter case and finally we break it with break statement. break is IMP to break the flow.
- switch (expression) {
    case value1:
        // Code to be executed if expression === value1
        break;
## Statement vs Expression
- Expression is something which produces a value.
	- e.g 2+2, 1991,2000,
- Statement on the other hand completes/performs a action and doesnt produce any value e.g Switch statement, if-else statementm, function declaration.
- [Statement vs Expression Chat-GPT](https://chatgpt.com/c/41739609-bf79-459e-89d7-f1d0853bc386)


## Function
- **Function Declaration:->** Function Dec. syntax: `function name (parameter) {function body}` here the function is keyword is followed by function name then we enter parameter in brackets and then enter our function body in curly braces.
	- using **Return keyword** returns the value from function body.
	- we then have to *store this in a variable* because **function declaration is just a statement.**
- **Function Expression**:-> Function Exp. syntax: `const name = function (parameter) {function body}`. Here we store the entire function statement in a variable.
	- **the variable name is the function name in function expression.** we dont write function name after function keyword.
	- rest works the same.
- We finally have to call/evoke the function `name()` and enter the arguments inside it `name(arguments)`
- [[Pasted image 20240716155108.png||Function Anatomy]]
- **UseCase-1**: in func.declaration we can call the function before defining it. same is **not the case** for function declaration.
- [[Pasted image 20240716181430.png||Function inside function Data Flow]].
- Return statement immediately the Functions. Next line will not be executed.

##  Array
- In Js we can store multiple vlaues in Array which is a data structure. used for storing ***Ordered Data***
- 2 ways to create a array. `const array1 = [...]` and `const array1 = new Array(...)`;
- we can pass any Expression in Array. we can even call a function inside an Array.
- **Array Methods**
	- **Push** = *add* element to *last* (gives length of array and can store in a variable)
	- **Pop** = *remove* element from *last*.(also returns the popped values and can store in a variable)
	- **Shift** = *remove* element from *first* (also returns the removed value)
	- **unshift** = *add* elements to the *first* (gives length of array and can store in a variable)
	- **indexOf** = gives index number of element
	- **includes** = gives true/false based on values

## Objects
- Objects are a type of data structure which is used to store unstructured Data
- It stores data in key:pair format. `const newObject = {key:pair, key:pair}`

## DOM
- We can select an HTML element using `document.querySelector(.className).` This only selects the element.
	- to get innerText : `.textContent`
	- to get Value : `.value`
- We have to store that selected element in a variable like `const btn-element = document.querySelector(.className)`
- **btn-element.addEventListner('click', () => {})** this is event handler method which we can add to a variable like btn-element. in this example this works *when we click the button*. code which we want to execute need to go inside the function.
- We can *add CSS classes* on btn using **classList method**. eg. `btn-element.classList.add('hidden').
	- here we can add/ remove/ toggle .... 
- we can also *add and remove source of image in html* element using **.src method** `btn-element.src = https://profile.png.com` 
- [[DOM Flow.excalidraw]]

## How Javascript works behind the scenes
- ### Javascript Language
	- Garbage Collected- Algorthims which *removes old and unused Object*
	- JIT / Interpreted -Borh are Supported.
	- 1st-Class Functions - pass into other function and reurn from function.
- ### Js Engine and Runtime
	- Engine = which executes Code.
	- **compliation/Interpretation** = *compilation* is source code converted to machine code and saved as an *executable file*. Compilation can happen way before. It is very **FAST**
	- *Interpretation* = source code is converted to machine code and  executed Line by Line. it is very **SLOW**.
	- JIT = Course code is converted to machine code just like in compliation but no executable file is generated.
	- [[Javascript Engine.png]]
	- [[Javascript Runtime.png]]
- ### Execution Context
	- its and enviromnent where javscript code can be executed.
	- When page loads, a *Global execution context is created* and there can be only 1 GEC.
	- 1st top level code is executed and EC is created likewise
	- Function is executed and waits for Callback. *A new EC is created for every function call* i.e **1 EC per Function**
	- [[EC.png]]
	- #### Whats inside EC?? 
		- [javscript execution context article](https://dev.to/jahid6597/javascript-execution-context-a-deep-dive-4kno)
		- <u>Creation Phase</u>: JavaScript engine sets up the environment for the code to be executed. It creates the foll:- [[EC inside.png]]
			- <u>Variable Env</u> = variables, function inc arguments.
			- <u>Scope Chain</u> = 
			- <u>This keyword</u> = value of ***this object***. **NOTE**: arrow functions dont get this keyword.
		- <u>Execution Phase</u> : codes/ ENV are executed in **CallStack** which follows LIFO 
- ### Scoping and Scope
	- <u>Scope</u> : environment where variables is declared (global,function and Block)
	- <u>Scoping</u> : Where can we access a variable.
	- <u>lexical Scoping</u>: the lexical scope is _the scope of a variable or function based on where it is defined in the source_ code.
	- [[Scope and Scoping.png]] [[Three Types of Scope.png]]
	- <u>Scope Chaining</u>:
		- *let* and *const* are block scoped and variables declared with it can be accessed only in their block
		- variables declared with *var* are *<u>function scoped</u>*. and create properties on Window object. let and const dont create window object
		- Child scope can borrow variables values from parents scope.
		- order of function calls does not effect the scope chain
		- [[Scoping summary.png]]
- ### This Keyword
	- The value of `this` depends on in which context it appears: function, class, or global.
## Data structures
- ### Array Destructuring ^583eda
	- Way to extract values from array and assign them to variables. `[a,b] = [1,2]`. 
	- **Values in Original Array is maintained and not Mutated**
	- we can <u>skip the elements</u> using blank space `[i, , k] = [1,11,21,4]`. here 11 will be skipped.
	- we can <u>switch</u> variables `[b,a] = [1,2]`
	- can return 2 values from a function `[first, second] = function(1,2).` Here **1** and **2** will be stored in *separate variables.*
	- we can destruct a <u>nested Array</u> `[first, ,[third,fourth]] = [1,2,[3,4]]`
	- we can set default values of nonexisting values while extacting from array `[a,b,c] = [12,24] ` this will *give c= undefined*. however `[a,b,c=1] = [12,24]`  *will give c = 1*. very useful while fetching API data.
	- we can also do this *to string*  `let [a, b, c] = "abc" | c = c`
	- More Here [destructuring](https://javascript.info/destructuring-assignment)
	- let [item1 = defaultValue, item2, ...rest] = array
- ### Object Destructuring
	-  We can *reterive object property* using their key name. `const {a, b, c } = object ` Here a, b c are the property inside object
	- *New variable name*: `const {a:name, b:date} = object` 
	- *Default Value*: `const {a:name = 1, b:date = 2, c :time = [defualt value for c] = object`
	- *for clready declared Variable*: `({a=2,b=4} = object)` we have to wrap it in brackets
	- nested Obj: `see jonas code`
	- *pass object as arguments while calling*: function ({a=1,b=2}). so while defining parameter we can destructure it `function ({a,b}) {console.log(a,b)}`. In Parameter we can use {} to destructure.
- ### Spread Operator (...)
	- Spread syntax "expands" an array into its elements `array = [1,2, ...oldArr]`.
	- it can return individual array items.
	- Doesnt create new variable like [[#^583eda|Array Destrucuting]].
	- Spread works on all <u>iterables : arrays, string, maps, sets.</u>
	- works <u>when passed as arg into function and create a new Array</u>
	- Can Copy an object too.
- ### Rest Pattern and Parameter
	- Rest pattern can accumulate all the arguments into an array `(...num) = [1,2,3]`
- ### Short Circuting ( &&  and || )
	- 

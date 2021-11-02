// console.log("Hello World");
// <script src="script.js"></script>     //to insert js file in html

// Declaring Data (variabels)
    // 1. var (for global scope)
    // 2. let (for local scope)
    // 3. const (for unchangable variable)

// Display Output
    // document.write();                 //for html page
    // console.log();                    //for console
    // window.alert("Are You Alien");    //for alert pop up

    // let name = prompt("What is Your Name");
    //     console.log("Hello " + name + ". Nice to meet you.");
    //     console.log(`Hello ${name}. Nice to meet you.`);

    // if (confirm("Do you want to enter")) {
    //  console.log("Nice choice");
    // } else {
    //   console.log("Bad choice");
    // }


// DATA TYPES
// 1. Primitive type of Data

    // const myName = "Manish";
    // console.log(myName);
    // console.log(typeof(myName));     // 1. "String"

    // const age = 23;
    // console.log(age);
    // console.log(typeof(age));        // 2. Number
    // console.log(isNaN(age));         // (if age is NaN then false otherwise true)

    // const iAmMale = true;
    // console.log(iAmMale);
    // console.log(typeof(iAmMale));    // 3. Boolean (ture/1 || false/0)

    // let mySurName;
    // console.log(mySurName);
    // console.log(typeof(mySurName));  // 4. undefined

    // const dream = null;
    // console.log(dream);
    // console.log(typeof(dream));      // 5. null || Nothing

    // (typeof(Data));      for checking type of date
    // (isNaN(data));       for checking number is ture or false
    // (instanceof(data))

// ASSIGNMENT OPERATORS (=)
    // let a = 2;
    // let b = 3;
    // let c = a + b;   // 5
    // a += 3;      // 5
    // b -= 3;      // 0

// Arithmetic Operators     // 2 + 3 (Operand Operator Operand)
    // let a = 16;
    // let b = 5;

    // let Addition =  a + b;            // 21
    // let Subtraction = a - b;          // 11
    // let Multiplication = a * b;       // 80
    // let Division = a / b;             // 3.2
    // let Modulus = a % b;              // 1
    // let Increment = a++;              // 17
    // let Decrement = a--;              // 15
    // let Exponentiation = a**2         // 16*16

// Comparison Operator
    // let a = 5;
    // let b = 11;

    // if (a === b){
    //     console.log(`a is eqaul to b`);
    // } else if (a !== b) {
    //     console.log(`a is not eqaul to b`);
    // } else if (a >= b) {
    //     console.log(`a is bigger or equal than b`);
    // } else if (a <= b) {
    //     console.log(`a smaller or equal than b`);
    // } else {
    //     consolel.log(`No Comparison Operator Found`);
    // }

// Logical Operator
    // let a = 5;
    // let b = 10;

    // if (a !== b && a < b) {
    //     console.log(`Both condition are equal`);
    // } else if (a === b || a < b ) {
    //     console.log(`a is equal to be or a is smaller than b`);
    // } else (a <= b) {
    //     console.log(`a smaller or equal than b`);
    // }


// MATH OBJECTS

    // let pi = Math.PI;
    // console.log(pi);                               // for PI value

    // let num = 10.77;
    // console.log(Math.round(num));                  // round to nearest number

    // console.log(Math.pow(2,3));                    // same as (2**3)

    // console.log(Math.sqrt(16));                    // for finding square root

    // console.log(Math.abs(-55));                    // convert negative value to positive

    // console.log(Math.ceil(5.75));                   // upper high value
    // console.log(Math.floor(5.75));                  // lower value

    // console.log(Math.max(2, 4, -8, 12));            // for minimum value
    // console.log(Math.min(2, 4, -8, 12));            // max value

    // let random = Math.random()*100;                 // for random number
    // console.log(Math.round(random));

    // console.log(Math.trunc(-44.7))                  // always give first integer number (before .)


// DATES

    // let date = new Date();
    // document.getElementById('age').innerHTML = date.toLocaleTimeString();

    // console.log(date);
    // console.log(new Date().toLocaleString());
  // console.log(new Date().toLocaleDateString());                   // 21/06/2021
  // console.log(new Date().toLocaleTimeString());                   // 17:32:15

    // console.log(date.getFullYear());
    // console.log(date.getMonth());
    // console.log(date.getDate());
    // console.log(date.getDay());
    // console.log(date.getHours());
    // console.log(date.getMinutes());
    // console.log(date.getSeconds());
    // console.log(date.getMilliseconds());

    // console.log(new Date(2021, 00, 02, 21, 15, 30).toLocaleString());
    // console.log(date.setFullYear(1997));






// If Else Statement
    // let year = prompt("Enter the year");
    // if (year % 4 === 0) {
    //     console.log(`${year} is a leap year.`);
    // }else if (year % 400 === 0) {
    //     console.log(`${year} is a leap year`);
    // }else if (year % 100 !== 0) {
    //     console.log(`${year} is not a leap year`);
    // }else {
    //     console.log(`${year} is not a leap year`);
    // }


// Switch Statement
    // let name = prompt("What's your name");
    // switch (name) {
    //   case "deepak":
    //     console.log("You are in Ludhiana");
    //     break;

    //   case "sanjeev":
    //     console.log("You are in Dehradun");
    //     break;

    //   case "manish":
    //     console.log("You are in Ludhiana");
    //     break;

    //   default:
    //     console.log("Enter valid name");
    // }

// Ternaty Operatot
    // let age = 17;
    // let age = prompt("What's your age");
    // console.log((age >= 18) ? "You can vote" : "You can't vote");



// LOOPS

    // let num = 0;
    // for(let num = 0; num <= 10; num++){
    //     console.log(num);
    // }

  // Table of 8
    // let table = 8;
    // for (num = 1; num <= 10; num++){
    //     console.log(table * num);
    // }

    // while(num < 10){
    //     console.log(num);
    //     num++;
    // }

    // do{
    //     console.log(num);
    //     num++;
    // }while(num < 10);




// 2. Refrence type of  Data

// FUNCTION

    // function functionName(parameter, parameter){
    // return statement
    // }
    // functionName(arguments, arguments);

    // function add(){
    //         let a = 2, b = 3;
    //         let total = a + b;
    //         console.log(total);
    //     }
    // add();

    // function multiply(a, b){
    //  return a * b;
    // }
    // console.log(multiply(2,3));

    // Anonymous function which has no name
    // let multiply = function(a,b) {
    //     return a * b;
    // }
    // let result1 = multiply(2,3);
    // let result2 = multiply(3,3);
    // console.log(result2);

    // Arrow function
    // let multiply = (a,b) =>  { return a * b };
    // console.log(multiply(5, 5));



// STRING METHODS

let profession = 'I am a MERN Stack developer.';
    
//     console.log(profession.length);                        //  .length 

//     let indexOf = profession.indexOf('MERN', 7);           // ,from begin
//     console.log(indexOf);                                  
        
//     console.log(profession.lastIndexOf('MERN'));

//     console.log(profession.search('Stack'));             // search index number

// // EXTRACTING STRING PARTS

//     let newArr = profession.slice(0, 5);                     // I am a
//     console.log(newArr);

//     let newArr = profession.slice(0, -2);                   // ,-2 (start from last index)
//     console.log(newArr);

//     let bio = `Lorem ipsum dolor sit amet consectetur adipisicing elit Commodi eveniet cula
//     sequi quos exercitatio.`

//     console.log(bio.length);
//     let newBio = bio.slice(0, 80);
//     console.log(newBio);

    // .substring is similar to slice but cannot take negative index.

    // let newProfession = profession.replace('MERN', "MEAN")
    // console.log(newProfession);                                  // only replace first match

    // let str = 'Hello deveoper';
    // console.log(str.charAt('0'));                          // find letter from position

    // let str1 = 'Hello deveoper';
    // console.log(str1.charCodeAt('0'));                     // find CharCode of letter

// let str = "HELLO WORLD!";                                     // find charCode number
    // let length = str.length - 1;
    // console.log(length);

    // console.log(str.charCodeAt(length));

    // console.log(str.toUpperCase());
    // console.log(str.toLowerCase());

    // let strConcat = 'How are you.'
    // console.log(str.concat(' ' + strConcat));

    // let strTrim = "              HELLO                 WORLD!"; 
    // console.log(strTrim.trim());                    // remove whitespace from start and end

    // let strSplit = str.split(' ');                      // convert string to array
    // console.log(strSplit);




// ARRAY

let friends = ["rishab", "samir", "aashish"];
    // console.log(friends);                                    // lower index/boundary - upper index
    // console.log(friends[0]);                                 // ['elements', 'elements', 'elements'];
    // console.log(friends.length - 1);                         // for last index

    //  friends.push('dinesh');             // to add at last
    //  console.log(friends);

    //  friends.pop();                      // to remove from last
    //  console.log(friends);

    // friends.unshift('zeynap');           // to add at start
    // console.log(friends);

    // friends.shift();                     // to remove from last
    // console.log(friends);

    // console.log(friends.sort());                            // for sort by alphabets
    // console.log(friends.sort().reverse());                  // for reverse of alphabet

    // console.log(friends.indexOf('samir'));               // for index number
    // console.log(friends.lastIndexOf('samir'));           // element.lastIndexOf(''); from last
    // console.log(friends.includes('samir'));              // ture if includes || false

// let months = ["Jan", "Feb", "april", "May", "June"];

    // let newMonths = months.splice(2, 0, 'march');        // for add items 
    // console.log(months);

    // let newMonths1 = months.splice(months.length, 0 , 'July');  // to add at last
    // console.log(months);

    // let newMonths2 = months.splice(0, 2);                // to delete items
    // console.log(months);

    // console.log(months.indexOf('april'));

    // let update = months.splice(2,1,'April');                // to update array
    // console.log(months);

    // if (months.indexOf('april') != -1) {                   // to update array by (if else)
    //     let update = months.splice(2,1,'April');
    //     console.log(months);
    // } else {
    //     console.log('No such data found');
    // }


// Array Iteration

    // for (let i = 0; i < friends.length; i++) {           // for loop
    //     console.log(friends[i]);
    // }

    // for (let elements in friends) {                      // for index number of array
    //     console.log(elements);
    // }

    // for (let elements of friends) {                      // for elements of array
    //     console.log(elements);
    // }

    // friends.forEach(function(element, index, array) {    // .forEach(function(){});
    //     console.log(element, index);
    // });

    // friends.forEach((elem, index, array) => {            // .forEach(() => {});
    //     console.log(elem);
    // });


// const price = [120, 40, 80, 150, 60, 75, 110];
    // let find = price.find((element) => { return element < 100; });
    // console.log(find);                                 // .find(fun()=>{}; only return 1st element

    // let filter = price.filter((elem) => { return elem > 100 })
    // console.log(filter);                                 //  filter element

    // let arr = [25, 36, 49, 64, 81];                  // map to modify every value (but dont change original)
    // let newArr = arr.map( elem => Math.sqrt(elem) )
    // console.log(newArr);
    // console.log(arr);

    //     let arr = [2, 3, 4, 6, 8];
    //     let newArr = arr.map((elem) => elem*2).filter((elem) => elem > 10);
    //     console.log(newArr);

    // let newPrice = price.reduce((accumulator, elem, price) => {              // reduce to 1 number
    //     return accumulator += elem },-635);                          // ,-635 is initial value (added)
    // console.log(newPrice);


// Destructuring in Array

    let myBio = ['Manish', 23, 'Travel'];

        // let firstName = mybio[0];
        // let age = mybio[1];
        // let hobby = mybio[2];

        // console.log(age);

    // let [firstName, age, hobby] = myBio;
    // console.log(age);
    
// Add value in Array

    // let [firstName, age, hobby, petName='Mannu'] = myBio;
    // console.log(petName);

// Spread Operator (also work in Object)

    // let color = ['black', 'white', 'grey'];
    // let newColor = ['pink', 'red', 'yellow']

    // let all = [...color, ...newColor];
    // console.log(all);

// Flat an Array

    // let array = [
    //     [2, 2],
    //     [4,4],
    //     [6,6]
    // ]

    // console.log(array.flat());              // (count or infinity)

// Turn object into Array

    // let roadMap = {
    //     frontEnd : 'JavaScript',
    //     framework : 'ReactJs',
    //     backEnd : 'NodeJs'
    // }

    // console.log(roadMap);
    // console.log(Object.entries(roadMap));           // Turn object into Array

    // let newArr = Object.entries(roadMap);
    // console.log(Object.fromEntries(newArr));        // Turn back Array into Object

// OBJECT

    // let bio = {
    //     myName : {
    //         realName : 'Manish',
    //         petName : 'Mannu'
    //     },
    //     myAge : 23,
    //     profession : 'Web Developer',
    //     hobby : 'Travel',                                 // showData ()
    //     showData : function(){                      
    //         console.log(`My name is ${this.myName.realName}, I am ${bio.myAge} years old and I am a ${this.profession}`);
    //     }
    // }

    // console.log(bio.showData());            //  for showing object function
    // console.log(bio.myName.realName);
    // console.log(bio.myName.petName);


// Destructuring in Object

    // let start = 'frontEnd';
    // let job = {
    //     [start] : 'JavaScript',
    //     duration : [1+1+1],                 // [ ] for var data and calculate
    //     framework : 'ReactJs',
    //     backEnd : 'NodeJs'
    // }

    // console.log(job);

    // let {frontEnd, framework, backEnd, dataBase='MongoDB'} = job;
    // console.log(dataBase);

// Turn Array into Object
 
    // Object.fromEntries(name);


    

// DOM OBJECT


// Difference between Node and Element is, Nodes are Whitespace, Tab, Enter and Element

    // console.dir(document);                       // for very large tree for body
    // console.log(document.documentElement);         // for whole dom
    // console.log(document.head);                    // for html head
    // console.log(document.body);                    // for html body
    // console.log(document.links);                   // for links
    // console.log(document.images);                  // for images
    // console.log(document.body.childNodes);         // for all body element includes text(whitespace/tab/enter)
  // console.log(document.body.children);           // for all body element without text(whitespace)
    // console.log(document.body.children.length);    // for lenght of body element

    // console.log(document.body.firstElementChild);   // for fisrt child (can be whitespace)
    // console.log(document.body.firstElementChild.firstElementChild);   // for parents child element

    // console.log(document.body.parentNode);          // for parent element
    // console.log(document.body.parentElement);       // same as above
    // console.log(document.body.nextElementSibling);   // next sibling element
    // console.log(document.body.previousElementSibling);


// How to select 

    // (document.getElementById('main-box').innerHTML = 'hi there');        // for ID
    // console.log(document.getElementsByClassName('main'));                // for class name
    // console.log(document.getElementsByTagName('div'));                   // for tag name
    // console.log(document.getElementsByName('first'));                    // for name attribute

    // console.log(document.querySelector('.name'));              (BEST) // find first element #ID .class and tagName
    // console.log(document.querySelectorAll('div'));                  // for finding all same element

// Create DOM

    // Create Attribute

    // let main3 = document.getElementById('main3');

    // let attr = document.createAttribute('class');
    // attr.value = 'main3';
    // main3.setAttributeNode(attr);
    // console.log(main3);

    // Create Element

    // let p = document.createElement('p');
    // p.innerHTML = 'I am new';
    // document.body.appendChild(p);               // for in html body newest
    // main3.appendChild(p);                       // inside element


    // Create TextNode

    // let h1 = document.createElement('h1');
        // let text = document.createTextNode('this is h1');
        // // h1.appendChild(text);
    // // h1.innerHTML = 'this is h1';
    // document.body.appendChild(h1)

    // let title = document.querySelector('.title');

  // HTML
    // console.log title.innerHTML = `<div class="title">hii</div>`);
    // console.log title.innerText =  title');

  // CSS
    // title.style.color = 'blue';



// EVENTS in JavaScript

// 1. Inline Method 
    //<p onclick="alert("hi")"> one </p>;

// 2. Calling a function
    // let callingFunction = function callingFunctiion() {
    //     alert('I am most common way of writing function');
    // }

    // let callingFunction = () => {
    //     alert('I am most common way of writing function');
    // }

// 3. Third way of calling a function
    // document.getElementById('three').onclick = function() {
    //     alert("I am third way of calling a function");
    // }

    // let callingFunctiion = document.getElementById("three");
    // callingFunctiion.onclick = function() {
    //     alert("I am third way of calling a function");
    // }


// 4. Add Event Listener (BEST OPTION)
    // let callingFunctiion = document.querySelector('.four');
    // callingFunctiion.addEventListener('click', () => {
    //     alert('this is addEventListener method');
    // })

    // document.querySelector(".four").addEventListener('click', () => {
    //     alert('this is addEventListener method');
    // })


// Event Object

    // let checkEvent = document.querySelector('.four');
    
    // checkEvent.addEventListener('click', () => {
        //     console.log(event);                         // for events
        //     console.log(event.target);                  // for element location
        //     console.log(event.type);                    // for type of event (Click)
        // })
        
    // let mouseEvent = document.querySelector('.three')
    // mouseEvent.addEventListener('mousedown', () =>{         
    //     mouseEvent.style.color = 'red';
    // } )

    // mousedown for press left click
    // mouseup for leaving after press
    // mouseenter for cursor entering in element
    // mouseleave for leaving pointer from element 


// KeyBoard Event

    // let keyboardEvent = document.querySelector('.four');
    // keyboardEvent.addEventListener('keypress', () => {
    //     keyboardEvent.style.color = 'blue'
    // });



    let dom = document.querySelector('.dom');
    let title = document.querySelector('.title');
    let header = document.querySelector('.header');
    let btn = document.querySelector('.btn');
    let list = document.querySelector('.list');
    let listItem = document.querySelector('.list-item');

    // list.addEventListener('click', (e) => {
    //     // console.log(e);
    //     // console.log(e.type);
    //     // console.log(e.target);               // for element location
    //     // console.log(e.target.id);
    //     // console.log(e.target.className);
    //     // console.log(e.target.parentNode);

    //     // console.log(e.clientX);            // for whole DOM screen
    //     // console.log(e.clientY);

    //     // console.log(e.offsetX);             // only for Element
    //     // console.log(e.offsetY);

    //     // console.log(e.altKey);
    //     // console.log(e.ctrlKey);
    //     // console.log(e.shiftKey);
    // })

    // btn.addEventListener('click', runEvent);
    // btn.addEventListener('dblclick', runEvent);
    // btn.addEventListener('mousedown', runEvent);        // pressing mouse key down
    // btn.addEventListener('mouseup', runEvent);          // vise-versa

    let box = document.querySelector('.box');

    // box.addEventListener('mouseenter', runEvent);        // mouse enter in element
    // box.addEventListener('mouseleave', runEvent);

    // box.addEventListener('mouseover', runEvent);         // when mouse enter inside inner element
    // box.addEventListener('mouseout', runEvent);

    // box.addEventListener('mousemove', runEvent);            // when mouse move


    let input = document.querySelector('.input');
    // input.addEventListener('keydown', runEvent);            // whenever press key down
    // input.addEventListener('keyup', runEvent);              // vise-versa
    // input.addEventListener('keypress', runEvent);
    // input.addEventListener('focus', runEvent);                 // focus state
    // input.addEventListener('blur', runEvent);                  // when we left focus state
    // input.addEventListener('cut', runEvent);          
    // input.addEventListener('paste', runEvent);              
    
    let select = document.querySelector('.select');
    // select.addEventListener('change', runEvent);
    // select.addEventListener('input', runEvent);
    // btn.addEventListener('submit', runEvent);

    function runEvent(e) {
        // console.log(e.type);
        // console.log(e.target.value);
        // box.innerText = e.target.value
        // document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
        // box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";

    }

 console.log(22);


    // console.log(btn.parentNode);        // .header
    // console.log(btn.parentElement);        // same
    
    // console.log(list.children);
    // console.log(list.children[2]);
    // console.log(list.children[2].nextElementSibling);
    // console.log(list.firstElementChild);
    // console.log(list.lastElementChild);
    
  // create Element
    // let li = document.createElement('li');
    // li.classList = 'list-item';
    // li.id = 'li';
    // li.setAttribute('name', 'li');

    // li.innerText = 'This is new li';
    // liText = document.createTextNode('this si li TextNode');
    // li.appendChild(liText);
    
    // console.log(li);

    // dom.insertBefore(li, header);
    // header.insertBefore(li, btn);
  // list.insertBefore(li, list.children[2]);
    // list.insertBefore(li, list.firstElementChild);
    // list.insertBefore(li, list.lastElementChild);
    
    btn.addEventListener('click', addItem);
    function addItem() {
        // let li = document.createElement('li');
        // li.classList = 'list-item';
        // li.innerText = `${input.value}`;
        
        // list.insertBefore(li, list.child);

             let li = `<li class="list-item">${input.value}</li>`
            list.insertAdjacentHTML("beforeEnd", li);

        input.value = '';
    }

    




// Time Based Events

    // setTimeout

        // let showName = document.querySelector('.show');
        // let btn = document.querySelector('.btn');

        // btn.addEventListener('click', () => {
        //     showName.innerHTML = "Loading";

        //     setTimeout(() => {
        //         showName.innerHTML = "Manish";
        //     }, 1000);
        // });

    // setInterval

        // let input = document.querySelector('.input');
        // let show = document.querySelector('.show');
        // let btn = document.querySelector('.btn');
        // let stop = document.querySelector('.stop');

        // let num;  
        // let startFun;

        // btn.addEventListener('click', () => {
        //     num = input.value;
        //     startFun = setInterval(() => {
        //         show.innerHTML = `${num}`;
        //         num--;
        //     }, 800);
        // })

        
    // clearInterval();
        // stop.addEventListener('click', () => {
        //     clearInterval(startFun);
        // })




// AJAX (Asynchronous JavaScript And XML) call using XMLHttprequest

    // let container = document.querySelector('.container');

    // let linlk =  'https://restcountries.eu/rest/v2/name/nepal';

    // // sending request
    // let request = new XMLHttpRequest();
    // request.open('GET', 'https://restcountries.eu/rest/v2/name/canada')
    // request.send();

    // // getting response

    // request.addEventListener('load', function () {
    //     // console.log(this.responseText);
    //     let [data] = JSON.parse(this.responseText)        // to convert in Object
    //     console.log(data.name);
    //      let htmlData = `
    //      <div id="id-card">
    //           <article class="card">
    //             <div class="card-body">
    //               <img src="${data.flag}" alt="flag" class="card-body-img">
    //               <h3 class="card-body-title">${data.name} <span></span>
    //               </h3>
    //               <h6 class="card-body-text"> Capital : ${data.capital}</h6>
    //             </div>

    //             <div class="card-footer">
    //               <div class="card-footer-social">
    //                 <h5>${data.nativeName}</h5>
    //                 <h6>Native Lang</h6>
    //               </div>
    //               <div class="card-footer-social">
    //                 <h5>${data.population}</h5>
    //                 <h6>Population</h6></div>
    //               <div class="card-footer-social">
    //                 <h5>${data.demonym}</h5>
    //                 <h6>Demonym</h6>
    //               </div>
    //             </div>
    //           </article>
    //         </div>
    //      `

    //      container.insertAdjacentHTML("afterbegin", htmlData);
    // })


// JSON 

    // let object = {
    //     key1 : 'manish',
    //     key2 : 'kumar',
    //     key3 : 'rawat'
    // }
    // console.log(object);

    // let object_as_string = JSON.stringify(object);
    // console.log(object_as_string);                    // JSON.stringify for turning object into string

    // let string_as_object = JSON.parse(object_as_string)
    // console.log(string_as_object);                    // JSON.parse for turning JSON string into object


// Promise 3 stages

    // 1. Fulfil (successful)
    // 2. Reject (fail)
    // 3. ongoing
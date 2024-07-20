// var cityToCheck = prompt("Enter your city");
//  cityToCheck = cityToCheck.toLowerCase();
// alert(cityToCheck)

//var cityToCheck = prompt("Enter your city");
//  cityToCheck = cityToCheck.toUpperCase();
// alert(cityToCheck)

//  var firstChar = cityToCheck.slice(0, 3);
//  console.log(firstChar);

//  var someChars = cityToCheck.slice(2, 5);
//  console.log(someChars);

//  var someChars = cityToCheck.slice(2);
//  console.log(someChars);

//  var firstChar = cityToCheck.slice(0, 1);
//  var otherChars = cityToCheck.slice(1);
//  firstChar = firstChar.toUpperCase();
//  otherChars = otherChars.toLowerCase();
//  var cappedCity = firstChar + otherChars;
//  console.log(cappedCity);

// var month = prompt("Enter a month");
//  var charsInMonth = month.length;
//  if (charsInMonth > 3) {
//  month = month.slice(0, 3);
//  console.log(month);
//  }

//  var str = prompt("Enter some text");
// var numChars = str.length;
//  for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) === " ") {
//  alert("No double spaces!");
//  break;
//  }}

 var text = " The New Yorker magazine doesn't allow the phrase 'World War II"
// for (var i = 0; i < text.length; i++) {
//      if (text.slice(i, i + 12) === "World War II") {
//     var  text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//      console.log(text);
//      }
//      }

// var firstChar = text.indexOf("World War II");
// console.log(firstChar);

// var firstChar = text.indexOf("World War II");
//  if (firstChar !== -1) {
//  text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
//  console.log(text);
//  }

// var text = "To be or not to be.";
//  var segIndex = text.lastIndexOf("be");
//  console.log(segIndex);

//var firstName = "maryam"
// var firstChar = firstName.charAt(3)
// console.log(firstChar);

// var lastChar = firstName.charAt(firstName.length - 1);
// console.log();

// var text = "good!"
// for (var i = 0; i < text.length; i++) {
//      if (text.charAt(i) === "!") {
//      alert("Exclamation point found!");
     
//      }
//      }
    
// var newText = text.replace("World War II", "the Second World War");
// console.log(newText); 

// var num = 45.49
// var numberOfStars = Math.round(num);
// console.log(numberOfStars);

// var num = 45.50
// var numberOfStars = Math.round(num);
// console.log(numberOfStars);

// var scoreAvg = Math.round(.8437);
// console.log(scoreAvg);

// var scoreAvg = Math.ceil(1.01);
// console.log(scoreAvg);

// var scoreAvg = Math.floor(.6678437);
// console.log(scoreAvg);

// var num = Math.random()
// var number = ( num *6) + 1
// console.log(number);

// var age = prompt("enter your age")
// var str = parseInt(age)
// alert(str + 1)

// var num = prompt("enter some percentage")
// alert(parseInt(num))

// var num = prompt("enter some percentage")
// alert(parseFloat(num))

// var num = parseFloat("50")
// alert(typeof(num))

// var floatingNumString = "24.9876";
// var num = Number(floatingNumString);
// console.log(num);
// console.log(typeof(num));

// var numberAsNumber = 12.34;
//  var numberAsString = numberAsNumber.toString();
// console.log(numberAsString);
// console.log(typeof(numberAsString));

// var num = 10.405657
// num = num.toFixed(4)
// console.log(num);

// var d = new Date()
// var set = d.setDate(20)
// console.log(set);

// function cookmaggi(maggi,water,pot){
//   console.log("we made a " + maggi + " maggi. we used "+ water + " cup of water in " +  pot + " pan" );
// }
// cookmaggi(2,4,1)

// var bread = prompt("enter your favrourite bread")
// var veg = prompt("enter your favrourite veg")
// var souce = prompt("enter your favrourite souce")

// function makeSandwitch(bread,veg,souce){
//     var sandwitch = bread + " bread " + veg + " vegatable " + souce + " souce your sandwitch is ready"
//     return sandwitch
// }
// var functionCall = makeSandwitch(bread,veg,souce)
// console.log(functionCall);

// function greetUser(a){
//     alert(a)
// }
// greetUser("hello user")

// var greeting = "Hello, there."
// function greetUser(a){
//     alert(a)
// }

//  greetUser(greeting);

// function greetUser(a){
//     alert(a)
// }
// var greeting = "hello user"
// greetUser(greeting)


// function calcTot(merchTot) {
// var orderTot;
//  if (merchTot >= 100) {
//  orderTot = merchTot;
//  }
//  else if (merchTot < 50.01) {
//  orderTot = merchTot + 5;
//  }
//  else {
//  orderTot = merchTot + 5 + (.03 * (merchTot - 50));
//  }
//  return orderTot;
//  }
// var merchTot = 10
// var functionCall =  calcTot(merchTot)
// console.log(functionCall);


// function addNumbers() {
//     var theSum = 2 + 2;
//  console.log(theSum);
 
//  }
 
// addNumbers()

// var count = 0
// function counter(){
//     for(var i = 0 ; i < 4 ; i++){
//         count++
//         console.log(count , i);
//         if(count === 7){
//             console.log(i);
//             break;
//         }
//     }
   

// }
// counter()
// counter()
// counter()

function myFunc(a,b){
     var sum = a+ b
     return sum
}
console.log(myFunc(4,5));
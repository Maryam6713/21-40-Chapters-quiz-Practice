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
    
var newText = text.replace("World War II", "the Second World War");
console.log(newText);
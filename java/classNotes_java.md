# Class Notes JAVA

*Var - Variable* is like a box for storing data like 
- String ( Text) 
- Numeric (Number)
- Boolen (True/False)

Key notes for assigning variable names

- should be unique.
- Should be started with character, not numeric.
- Can use Dollar($), underscore(_) but Space cant be used.
- common _keywords_ can not be used like 
  - input
  - let
  - print
  - etc
- its case sensitive, 
- best practice is use small letter or Camel Case convention `myName`

Variables are defined as:

```java
var myName;
myName = "Asad";
var myLastName = "Ali";
// also `let` can be used
let age = 30;
var isRegistered = true;
var fullName;

```

Now we can work on above mentioned `variables`

```JAVA
fullName = myName + lastName
console.log = (age);
alert("Age of " + fullName + " is " + age);

```
It will output as popup as `Age of  Asad Ali is 30` 


### Chapter 03 - Variables for Number

```JAVA
// chap 3 

var a = 10, b = 5;
var sum, subtract, multiply, divide;
sum = a + b;
var subtract = a - b;
alert("Sum of " + a + "+" + b + " is " + sum);
  // new commands
var weight = 150;
var newweight;
newweight = weight + 25; 
weight +=25;
weight = newweight + 25;
alert(weight);

```
If differnt types 

```java
// numeric and string --- will be conated 
var orignalNum = "23";
var newNum = 7 + orignalNum;
window.alert(newNum);

```


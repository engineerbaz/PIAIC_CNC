# Class Notes JAVA

*Var - Variable* is like a box for storing data like 
- String ( Text) 
- Numeric (Number)
- Boolen (True/False)

Key notes for assigning variable names

- should be unique.
- Should be started with character, not numeric.
- Can use Dollar($), underscore(_) but Space cant be used.
- its case sensitive.
- common _keywords_ can not be used like 
  - input, let, print, etc
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
Now Mathematical operations

```java
        // chap 07
var a = 5, b = 3;
  // alert(a + b * a);
alert(a - b * b + 5);

var f = (a + b ) * 3; 
  // alert(f);    
var g = (a + b) * ( a - 3 );
alert (g);

```
Concatination of String

```java
// chap 08
var name = "Mark";
var message = "Thanks "
alert(message, name);
```

*Prompt* asks user for some information and provides a response. 
Response is String always,

```java
var spec = prompt("Your Species?", "Human");

```


```java
// Chap 06
var pre = 20, post = 20;
var post = post++;
var pre = ++pre;

alert(post);
alert(pre);
```   


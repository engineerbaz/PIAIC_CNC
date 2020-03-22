# Class 1 - Adv JS - Q3 - PIAIC
Starting with P


```JS
// This Code for 43 - Placing scripts
var fname = "bashir"
var name = `Name is ${fname} Ahmed 
my father name is Munir`
// alert (name);
document.write("My" + name);
```

### Refresh Browser with removing data 
`CRTL+SHIFT+R`

### var Vs let
**var** is Function Scope while _let_ is block Scope

```JS
if (true) {
	var company = "pana";
	let company1 = "cloud";
}
//this will be ok
document.write(company);
// this will not work 
document.write(company1); 
```
Making *Function* 
Now function is definded 

```JS
function add() {
	if (true) {
		var company = "pana";
		let company1 = "cloud";
}
add();
document.write(company);
document.write(company1); 
```


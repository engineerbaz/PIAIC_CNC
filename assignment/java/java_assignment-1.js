var linux, docker, k8s, git, js;
var tot,per;
linux = parseInt(prompt("Enter your Linux marks: "));
docker = parseInt(prompt("Enter your Docker marks: "));
k8s = parseInt(prompt("Enter your Kubernetes marks: "));
git = parseInt(prompt("Enter your GIT marks: "));
js = parseInt(prompt("Enter your JavaScript marks: "));

tot = parseInt(linux + docker + k8s + git + js);
per = (tot /500)*100;

alert("Marksheet\n" + "1. Linux = " +linux+ "\n2. Docker = " +docker+ "\n3. Kubernetes = " +k8s+ "\n4. GIT = " + git+ "\n5. Java Script = " +js);
alert("\n Total Marks : "+ tot + " /500");
alert("\n Percenatage : "+ per + "%");
alert("\n --------------- \n  Good Work!");

 

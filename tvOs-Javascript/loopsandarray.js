var name = ["Jon", "Jacob", "Jingle", "Heimer", "Smith"];

for (var x =0; x<name.length; x++){
    console.log("Name: " + name[x]);
}

name.push("Tom");

for (var x =0; x<name.length; x++){
    console.log("Name: " + name[x]);
}

var whatever = ["Luis", true, 312];
for (var x =0; x<whatever.length; x++){
    console.log("whatever: " + whatever[x]);
}

var i = 0;
while(i<10){
    console.log("Iteration: "+i);
    i++
}

var j = 0;
do{
    console.log("Iteration: "+j);
    j++
} while(j<10);

whatever.splice(0,1);
console.log(whatever);
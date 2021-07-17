var person = {
    name: "Luis",
    age: 22,
    speakName: function(aName){
        return "Hello, " + aName;
    }
};

console.log(person.name);
console.log(person.speakName("Harry"));

console.log("Name: " + person["name"]);



person.age += 5;
console.log("Age: " + person["age"]);

var Vehicle = function(make, color, premium) {
    var self = this;
    this.make = make;
    this.color = color;
    this.odometer = 0;
    this.engine = "V6";

    if(premium == true){
        this.engine = "V8";
        this.color = "Platinum";
    }
    this.addTrip = function(newMiles){
        if(newMiles>0){
            self.odometer += newMiles;
        }
    };
};

var benz = new Vehicle("Mercedez-benz", "Blue", false);

console.log("Color: "+benz.color);






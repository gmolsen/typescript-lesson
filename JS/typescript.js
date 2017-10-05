console.log("okay");
//variable "x" is type number
var x = 0;
//variable "y" is "any" type
var y = "0";
//variable z is "boolean" type
var z = true;
function sayHello() {
    return "hello";
}
;
var Student = /** @class */ (function () {
    //constructor for initializing instances of Customer
    function Student(Name, Color, Number) {
        this.Name = "*NO NAME*";
        this.Color = "*NO COLOR*";
        this.Number = 0;
    }
    //Log method of type void does not return a value
    Student.prototype.Log = function () {
        console.log(this.Name, this.Color, this.Number);
    };
    return Student;
}());
//c#: Customer cust = new Customer();
//constructor "Customer()" initializes instance "cust" with class properties
var stud = new Student("Sue Ann", "Green", 7);
stud.Log();
var studList = [
    new Student("Sue Ann", "Green", 7),
    new Student("Greg", "Black", 4),
    new Student("Eric B", "Blue", 11),
    new Student("Bob", "Black", 13),
    new Student("Eric S", "Green", 13)
];
for (var _i = 0, studList_1 = studList; _i < studList_1.length; _i++) {
    var stud_1 = studList_1[_i];
    stud_1.Log();
}

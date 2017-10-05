console.log("okay");

//variable "x" is type number
var x: number = 0;
//variable "y" is "any" type
var y: any = "0";
//variable z is "boolean" type
var z = true;

function sayHello():string {
	return "hello";
};

class Student {
	//public by default
	Name:  string;
	Color: string;
	Number: number;

	//Log method of type void does not return a value
	Log(): void {
		console.log(this.Name, this.Color, this.Number);
	}
		//constructor for initializing instances of Customer
		constructor(Name: string, Color: string, Number: number) {
			this.Name = "*NO NAME*";
			this.Color = "*NO COLOR*";
			this.Number = 0;
		}
	}

//c#: Customer cust = new Customer();
//constructor "Customer()" initializes instance "cust" with class properties
let stud:Student = new Student("Sue Ann", "Green", 7);
stud.Log();

let studList = [
	new Student("Sue Ann", "Green", 7)
	new Student("Greg", "Black", 4)
	new Student("Eric B", "Blue", 11)
	new Student("Bob", "Black", 13)
	new Student("Eric S", "Green", 13)
	]

for (let stud of studList) {
	stud.Log();
}
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

class Customer {
	Id: number;
	Name: string;

	//Log method of type void does not return a value
	public Log(): void {
		console.log(this.Id, this.Name);
	}
	//constructor for initializing instances of Customer
	constructor(id: number, name: string) {
		this.Id = id;
		this.Name = name;
	}
}

//c#: Customer cust = new Customer();
//constructor "Customer()" initializes instance "cust" with class properties
let cust:Customer = new Customer(1, "Max Tech Train"); 
cust.Log();

let custList = [
	new Customer(2, "P&G"),
	new Customer(3, "GE"),
	new Customer(4, "Great American"),
	new Customer(5, "TQL")
]

for(let cust of custList) {
	cust.Log();
}

class Student {
	Name: string;
	Color: string;
	Number: number;

	// constructor(Name: string, Color: string, Number: string) {
	// 		this.Name = "*NO NAME*";
	// 		this.Color = "*NO COLOR*";
	// 		this.Number = 0;
	// 	}

	constructor(name: string, color: string, number: number) {
		this.Name = name;
		this.Color = color;
		this.Number = number;
	}

	public debug(): void {
		console.log(this.Number, this.Name, this.Color);
	}
}

let students = [
	new Student("Sue Ann", "Green", 7);
	new Student("Sue Ann", "Green", 7),
	new Student("Greg", "Black", 4),
	new Student("Eric B", "Blue", 11),
	new Student("Bob", "Black", 13),
	new Student("Eric S", "Green", 13)
	]

for (let student of students) {
	student.debug();
}
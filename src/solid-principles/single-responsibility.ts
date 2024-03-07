
// Problem
// class Employee {
// 	constructor(public name: string) {}
//
// 	getName() {}
//
// 	printTimeSheetReport() {}
// }

//solve problem

class Employee {
	constructor(public name: string) {}

	getName() {}
}

class TimeSheetReport {
	print(employee: Employee) {}
}

const time = new TimeSheetReport();
time.print(new Employee('Beshoy'))

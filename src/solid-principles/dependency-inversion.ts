/**
 * Problem high-level BudgetReport depend on low-level MySQLDatabase

class MySQLDatabase {
	insert() {}
	update() {}
	delete() {}
}

class BudgetReport {
	constructor(private dataBase: MySQLDatabase) {}

	open() {}

	save() {}
}
 */

/**
 * Solve
 */

interface Database {
	insert(): void;
	update(): void;
	delete(): void;
}

class MySQL implements Database {
	delete(): void {
	}

	insert(): void {
	}

	update(): void {
	}
}

class MongoDB implements Database {
	delete(): void {
	}

	insert(): void {
	}

	update(): void {
	}
}

class BudgetReport {
	constructor(private database: Database) {}

	open() {}
	save() {}
}

const br = new BudgetReport(new MySQL())

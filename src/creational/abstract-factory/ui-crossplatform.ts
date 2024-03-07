interface Shape {
	paint(): void;
}

abstract class Button implements Shape {
	abstract paint(): void
}

abstract class Checkbox implements Shape {
	abstract paint(): void
}

class WinButton extends Button {
	paint(): void {
	}
}

class MacButton extends Button {
	paint(): void {
	}
}

class WinCheckbox extends Checkbox {
	paint(): void {
	}
}

class MacCheckbox extends Checkbox {
	paint(): void {
	}
}

abstract class GUIFactory {
	abstract createButton(): Button;
	abstract createCheckbox(): Checkbox;
}

class WinFactory extends GUIFactory {
	createButton(): Button {
		return new WinButton();
	}

	createCheckbox(): Checkbox {
		return new WinCheckbox();
	}
}

class MacFactory extends GUIFactory {
	createButton(): Button {
		return new MacButton();
	}

	createCheckbox(): Checkbox {
		return new MacCheckbox();
	}
}

class Application {
	button?: Button;

	constructor(private factory: GUIFactory) {}

	createUI() {
		this.button = this.factory.createButton();
	}

	paint() {}
}

export {}

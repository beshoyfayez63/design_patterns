abstract class Button {
	abstract render(): void;
	abstract onClick(): void;
}

class WindowsButton extends Button {
	onClick(): void {
	}

	render(): void {
	}
}

class HTMLButton extends Button {
	onClick(): void {
	}

	render(): void {
	}
}

abstract class Dialog {
	render() {
		const button = this.createButton();
		button.onClick()
		button.render();
	}
	abstract createButton(): Button
}

class WindowsDialog extends Dialog {
	createButton(): Button {
		return new WindowsButton();
	}
}

class WebDialog extends Dialog {
	createButton(): Button {
		return new HTMLButton();
	}
}

export {}

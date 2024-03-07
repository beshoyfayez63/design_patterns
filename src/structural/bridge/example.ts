interface Device {
	isEnable(): boolean;
	enable(): void;
	disable(): void;
	getVolume(): number;
	setVolume(percent: number): void;
	getChannel(): number;
	setChannel(channel: number): void;
}

class Tv implements Device {
	disable(): void {}

	enable(): void {}

	getChannel(): number {
		return 0;
	}

	getVolume(): number {
		return 0;
	}

	isEnable(): boolean {
		return false;
	}

	setChannel(channel: number): void {
	}

	setVolume(percent: number): void {}
}

class RemoteControl {
	constructor(protected device: Device) {}

	togglePower() {
		this.device.isEnable() ? this.device.disable() : this.device.enable();
	}

	volumeDown() {
		this.device.setVolume(this.device.getVolume() - 1);
	}

	volumeUp() {
		this.device.setVolume(this.device.getVolume() + 1);
	}

	channelDown() {
		this.device.setChannel(this.device.getChannel() - 1);
	}

	channelUp() {
		this.device.setChannel(this.device.getChannel() + 1)
	}
}

class AdvanedRemote extends RemoteControl {
  mute() {
    this.device.setVolume(0);
  }
}

// implementation
const tv = new Tv();

const remote = new RemoteControl(tv);
remote.volumeUp();

const advRemote = new AdvanedRemote(tv);
advRemote.mute()

export {}
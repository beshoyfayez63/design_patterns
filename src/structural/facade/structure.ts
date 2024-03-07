class Facade {
  constructor(public anotherFacade?: AdditionalFacade) {}

  linksToSubsystemObjects: any
  optionalAdditionalFacade: any
  subsystemOperation(): void {}
}

class AdditionalFacade {
  // another work...
  anotherOperation(): void {}
}
export {}
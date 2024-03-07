/**
 * this is a problem because
 * - The resulting code also violates the open/closed principle, since the client code becomes dependent on concrete
 * classes of documents
 * - the client code will break if we don’t check the document type before saving it.
 *
 * class Project {
 *
 * 	constructor(private docs: IDocument[]) {}
 *
 * 	openAll() {
 * 		this.docs.forEach(doc => doc.open())
 * 	}
 *
 * 	saveAll() {
 * 		this.docs.forEach(doc => {
 * 			if(!(doc instanceof ReadOnlyDocument)) {
 * 				doc.save();
 * 			}
 * 		})
 * 	}
 * }
 *
 * interface IDocument {
 * 	data: any;
 * 	filename: string;
 *
 * 	open(): void;
 * 	save(): void;
 * }
 *
 * class ReadOnlyDocument implements IDocument {
 * 	data: any;
 * 	filename = 'Readonly document';
 *
 * 	open(): void {
 * 		console.log('Readonly Document Open')
 * 	}
 *
 * 	save(): void {
 * 		throw new Error("can't save readonly document");
 * 	}
 * }
 *
 * class NormalDocument implements IDocument {
 * 	data: any;
 * 	filename = 'normal document';
 *
 * 	open(): void {
 * 		console.log('Normal Document Open')
 * 	}
 *
 * 	save(): void {
 * 		console.log('Normal Document Save')
 * 	}
 * }
 *
 * const project = new Project([new NormalDocument(), new ReadOnlyDocument()]);
 * project.saveAll();
 */

class Project {
	constructor(private docs: IDocument[]) {}

	openAll() {
		this.docs.forEach(doc => doc.open());
	}

	saveAll() {
		this.docs.forEach(doc => {
			if(doc instanceof WritableDocument) {
				doc.save();
			}
		})
	}
}

interface IDocument {
	data: any;
	filename: string;
	open(): void;
}

class ReadonlyDocument implements IDocument {
	data: any;
	filename = 'Doc';

	open(): void {
		console.log('Open Doc')
	}
}

class WritableDocument extends ReadonlyDocument {
	open() {
		console.log('Open Writable Doc')
	}

	save() {
		console.log('Save writable doc');
	}
}

const project = new Project([new ReadonlyDocument(), new WritableDocument()]);
project.saveAll();
project.openAll();

export {}
import {<%= namePascal %>Service} from './<%= nameDashed %>.service';

export class <%= namePascal %>ServiceProvider {
	constructor() {
		this.config = 'default';
	}

	setConfig(config) {
		this.config = config;
	}

	$get($log) {
		'ngInject';
		return new <%= namePascal %>Service(this.config,$log);
	}
}

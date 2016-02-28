import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {RuntimeComponentFactory} from './rt.component.factory';

/**
 * A Runtime Component represent JSON schema as DOM element.
 */
@Component({
    selector: 'ng2-runtime',
    directives: [CORE_DIRECTIVES],
    template: '<div></div>'
})
export class RuntimeComponent {
    
    private _schema:Object;
    
    @Input('schema') 
    set schema(value:Object) {
        this._schema = value;
    }
    
    get schema():Object {
        return this._schema;
    }
    
    constructor(private factory:RuntimeComponentFactory) {
        
    }
 }
 
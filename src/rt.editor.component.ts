import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {RuntimeEditorComponentFactory} from './rt.editor.component.factory';

/**
 * A Runtime Component represent JSON schema as DOM element.
 */
@Component({
    selector: 'ng2-rt-editor',
    directives: [CORE_DIRECTIVES],
    template: '<div></div>'
})
export class RuntimeEditorComponent {
    
    constructor(private factory:RuntimeEditorComponentFactory) {
        
    }
 }
 
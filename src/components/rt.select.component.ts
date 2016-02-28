import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

/**
 * A Runtime Select Component.
 */
@Component({
    selector: 'ng2-rt-select',
    directives: [CORE_DIRECTIVES],
    template: `
    <select>
        <ng2-rt-option *ngFor="#option of options" option="option"></ng2-rt-option>
    </select>`
})
export class RuntimeLinkComponent {

    @Input('options') var options:Array<string> = [];    
}
 
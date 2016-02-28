import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

/**
 * A Runtime Switcher Component.
 */
@Component({
    selector: 'ng2-rt-switcher',
    directives: [CORE_DIRECTIVES],
    template: `
    <select>
        <ng2-rt-option *ngFor="#option of options" option="option"></ng2-rt-option>
    </select>`
})
export class RuntimeSwitcherComponent {

    @Input('options') var options:Array<string>: [];    
}
 
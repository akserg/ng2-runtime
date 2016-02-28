import {Component, Input} from 'angular2/core';

/**
 * A Runtime Checkbox Label Component.
 */
@Component({
    selector: 'ng2-rt-checkbox-label',
    template: '<label>{{text}}</label>'
})
export class RuntimeCheckboxLabelComponent {
     
    @Input('text') var text:string = '';
}

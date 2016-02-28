import {Component, Input} from 'angular2/core';

/**
 * A Runtime Form Input Label Component.
 */
@Component({
    selector: 'ng2-rt-form-input-label',
    template: '<label>{{text}}</label>'
})
export class RuntimeFormInputComponent {
     
    @Input('text') var text:string = '';
}

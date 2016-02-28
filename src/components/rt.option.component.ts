import {Component, Input} from 'angular2/core';

/**
 * A Runtime Option Component.
 */
@Component({
    selector: 'ng2-rt-option',
    template: '<option value="{{value}}">{{title || value}}</option>'
})
export class RuntimeOptionComponent {

    @Input('title') var text:string = ''; 
    @Input('value') var value:string = '';    
}
 
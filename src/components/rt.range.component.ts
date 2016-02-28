import {Component, Input} from 'angular2/core';

/**
 * A Runtime Range Component.
 */
@Component({
    selector: 'ng2-rt-range',
    template: '<range min="{{min}}" max="{{max}}" step="{{step}}"></range>'
})
export class RuntimeLinkComponent {

    @Input('min') var min:string: '';
    @Input('max') var max:string: ''; 
    @Input('step') var step:string: '';   
}
 
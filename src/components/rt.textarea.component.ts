import {Component, Input} from 'angular2/core';

/**
 * A Runtime Textarea Component.
 */
@Component({
    selector: 'ng2-rt-textarea',
    template: '<textarea>{{text}}</textarea>'
})
export class RuntimeLinkComponent {

    @Input('text') var text:string: '';    
}
 
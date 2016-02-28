import {Component, Input} from 'angular2/core';

/**
 * A Runtime Link Component.
 */
@Component({
    selector: 'ng2-rt-link',
    template: '<a href="#">{{text}}</a>'
})
export class RuntimeLinkComponent {

    @Input('text') var text:string = '';    
}
 
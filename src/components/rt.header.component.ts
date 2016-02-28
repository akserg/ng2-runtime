import {Component, Input} from 'angular2/core';

/**
 * A Runtime Header Component.
 */
@Component({
    selector: 'ng2-rt-header',
    template: '<h3>{{text}}</h3>'
})
export class RuntimeHeaderComponent {
     
    @Input('text') var text:string = '';
}

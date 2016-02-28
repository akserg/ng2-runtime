import {Component, Input} from 'angular2/core';

/**
 * A Runtime Checkbox Component.
 */
@Component({
    selector: 'ng2-rt-multi-checkbox',
    template: `
    <div>
        
    </div>`,
    styles: [`
        .ng2-rt-checkbox {
            display: 'inline-block';
            width: 'auto';
        }
    `]
})
export class RuntimeMultiCheckboxComponent { 
    @Input('text') var text:string = '';    
}

// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-runtime

'use strict';

import {RuntimeComponent} from './src/rt.component';
import {RuntimeComponentFactory} from './src/rt.component.factory';

export * from './src/rt.component';
export * from './src/rt.component.factory';

export default {
    providers: [RuntimeComponentFactory],
    directives: [RuntimeComponent]
}


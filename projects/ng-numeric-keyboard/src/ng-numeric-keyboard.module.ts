import { NgModule } from '@angular/core';

import { NumericInputModule } from './lib/numeric-input.module';
export * from './lib/public-api';

@NgModule({
    exports: [
        NumericInputModule
    ]
})
export class NgNumericKeyboardModule { }

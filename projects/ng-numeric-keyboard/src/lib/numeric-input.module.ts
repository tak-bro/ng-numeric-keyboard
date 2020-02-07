import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NumericInputComponent } from './input/input.component';
import { NumericKeyboardComponent } from './keyboard/keyboard.component';

@NgModule({
    exports: [
        NumericInputComponent,
        NumericKeyboardComponent
    ],
    declarations: [
        NumericInputComponent,
        NumericKeyboardComponent
    ],
    entryComponents: [
        NumericKeyboardComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class NumericInputModule { }

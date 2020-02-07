import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ENTER, DEL, ESC } from '../utils/keys';
import Layouts from '../utils/layouts';

const KeyboardOptions = {
    layout: 'number',
    entertext: 'Enter'
};

@Component({
    selector: 'ng-numeric-keyboard',
    templateUrl: './keyboard.component.html',
    styleUrls: ['./keyboard.component.scss']
})
export class NumericKeyboardComponent implements OnInit {

    @Input() layout: string | { key: number | string }[][] = KeyboardOptions.layout;
    @Input() entertext: string = KeyboardOptions.entertext;

    @Output() press = new EventEmitter<number | string>();
    @Output() enterpress = new EventEmitter();

    public kp: any;
    public ks: any;
    public ENTER = ENTER;
    public DEL = DEL;
    public ESC = ESC;

    ngOnInit() {
        const options = { layout: this.layout, entertext: this.entertext };
        this.init(options);
    }

    dispatch(event: string, payload?: number | string) {
        switch (event) {
            case 'press':
                this.press.emit(payload);
                break;
            case 'enterpress':
                this.enterpress.emit();
                break;
        }
    }

    onTouchend(key: any) {
        this.dispatch('press', key);
        if (key === ENTER) {
            this.dispatch('enterpress');
        }
    }

    private init(options: any) {
        const { layout } = options;

        let resolvedLayout;
        if (typeof layout === 'string') {
            resolvedLayout = Layouts[layout];
            if (!Array.isArray(resolvedLayout)) {
                throw new Error(`${layout} is not a build-in layout.`);
            }
        } else {
            resolvedLayout = layout;
            if (!Array.isArray(resolvedLayout) || !resolvedLayout.every(i => Array.isArray(i))) {
                throw new Error(`custom layout must be a two-dimensional array.`);
            }
        }

        this.kp = options;
        this.ks = { resolvedLayout };
    }
}

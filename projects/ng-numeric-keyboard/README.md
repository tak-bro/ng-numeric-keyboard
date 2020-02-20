# ng-numeric-keyboard

Number keyboard for mobile browsers For Angular

> This project was forked in [numeric-keyboard](https://github.com/viclm/numeric-keyboard)

## Demo

- TBD

## Usage

### 1. Install

```
npm install ng-numeric-keyboard --save
```

import `NgNumericKeyboardModule`。

```typescript
import { NgNumericKeyboardModule } from 'ng-numeric-keyboard';

@NgModule({
  imports: [ BrowserModule, NgNumericKeyboardModule ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 2. Template

```html
<ng-numeric-input [layout]="'number'"
                  [entertext]="'Next'"
                  [placeholder]="'This is placeholder'"
                  [disabled]="false"
                  [(ngModel)]="data"
                  (enterpress)="onEnter()"
                  (ngModelChange)="onChange()"
                  (focus)="onInputFocus()"
                  (blur)="onInputBlur()">
</ng-numeric-input>

```

**Method**

| Name              | Description                                                                                    |
|-------------------|------------------------------------------------------------------------------------------------|
| `enterpress()`    | TBD
| `ngModelChange()` | TBD
| `focus()`         | TBD
| `blur()`          | TBD


## API

- TBD

## Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/tak-bro/ng-numeric-keyboard/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

### License

The MIT License (see the [LICENSE](https://github.com/tak-bro/ng-numeric-keyboard/blob/develop/LICENSE) file for the full text)

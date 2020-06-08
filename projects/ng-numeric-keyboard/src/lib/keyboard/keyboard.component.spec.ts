import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NumericKeyboardComponent } from './keyboard.component';

describe('Component: NumericKeyboardComponent', () => {
    let component: NumericKeyboardComponent;
    let fixture: ComponentFixture<NumericKeyboardComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NumericKeyboardComponent],
        });
        fixture = TestBed.createComponent(NumericKeyboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});

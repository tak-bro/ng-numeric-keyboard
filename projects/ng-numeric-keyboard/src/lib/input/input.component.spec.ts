import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NumericInputComponent } from './input.component';

describe('Component: NumericInputComponent', () => {
    let component: NumericInputComponent;
    let fixture: ComponentFixture<NumericInputComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NumericInputComponent],
        });
        fixture = TestBed.createComponent(NumericInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});

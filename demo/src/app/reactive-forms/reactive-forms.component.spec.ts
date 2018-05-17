import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsComponent } from './reactive-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgTempusdominusBootstrapModule } from '../../../../src/index';
import * as moment from 'moment';

describe('ReactiveFormsComponent', () => {
  let component: ReactiveFormsComponent;
  let fixture: ComponentFixture<ReactiveFormsComponent>;
  const format = 'DD/MM/YYYY';
  const opener = '.input-group-append';
  const startDate = moment('2015-11-18T00:00Z'); // today date
  const tomorrow = startDate.clone().add(1, 'd'); // tomorrow
  const yesterday = startDate.clone().add(-1, 'd'); // yesterday
  const dateTag =  (time) => {
    const selectDateTag = 'td[data-day="' + time.format('MM/DD/YYYY') + '"]';
    return fixture.debugElement.nativeElement.querySelector(selectDateTag);
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormsComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgTempusdominusBootstrapModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
 });
  it('should clear the date - form is invalid', () => {
    fixture.whenStable().then(() => {
      fixture.debugElement.queryAll(By.css('button'))[0].nativeElement.click();
      fixture.detectChanges();
      // the date input is not valid
      expect(component.form.controls['date'].valid).toBeFalsy();
      // form is not valid
      expect(component.form.valid).toBeFalsy();
    });
  });
  it('should select date - form is valid', () => {
    fixture.whenStable().then(() => {
      fixture.debugElement.queryAll(By.css(opener))[0].nativeElement.click();
      fixture.detectChanges();
      dateTag(yesterday).click();
      fixture.detectChanges();
      // the date input is valid
      expect(component.form.controls['date'].valid).toBeTruthy();
      // form is valid
      expect(component.form.valid).toBeTruthy();
      // value
      expect(component.form.value.date.format(format)).toBe(yesterday.format(format));
    });
  });
  it('select date and input should be touched - reset it and date should be untouched', () => {
    fixture.whenStable().then(() => {
      // open date input
      fixture.debugElement.queryAll(By.css(opener))[0].nativeElement.click();
      fixture.detectChanges();
      dateTag(yesterday).click();
      fixture.detectChanges();
      // date input is now touched
      expect(component.form.controls['date'].touched).toBeTruthy();
      // click on reset
      const btn = fixture.debugElement.query(By.css('button')).nativeElement;
      btn.click();
      fixture.detectChanges();
      // date input is now untouched
      expect(component.form.controls['date'].touched).toBeFalsy();
    });
  });
});
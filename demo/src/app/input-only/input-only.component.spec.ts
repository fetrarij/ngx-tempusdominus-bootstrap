import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgTempusdominusBootstrapModule } from '../../../../src/index';
import { InputOnlyComponent } from './input-only.component';
import * as moment from 'moment';

describe('InputOnlyComponent', () => {
  let component: InputOnlyComponent;
  let fixture: ComponentFixture<InputOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOnlyComponent ],
      imports: [
        FormsModule,
        NgTempusdominusBootstrapModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

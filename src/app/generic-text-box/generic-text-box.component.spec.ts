import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTextBoxComponent } from './generic-text-box.component';

describe('GenericTextBoxComponent', () => {
  let component: GenericTextBoxComponent;
  let fixture: ComponentFixture<GenericTextBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericTextBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

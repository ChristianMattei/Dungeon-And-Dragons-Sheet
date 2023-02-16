import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttacksSpellcastingComponent } from './attacks-spellcasting.component';

describe('AttacksSpellcastingComponent', () => {
  let component: AttacksSpellcastingComponent;
  let fixture: ComponentFixture<AttacksSpellcastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttacksSpellcastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttacksSpellcastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

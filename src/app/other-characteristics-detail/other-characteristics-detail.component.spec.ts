import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCharacteristicsDetailComponent } from './other-characteristics-detail.component';

describe('OtherCharacteristicsDetailComponent', () => {
  let component: OtherCharacteristicsDetailComponent;
  let fixture: ComponentFixture<OtherCharacteristicsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherCharacteristicsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherCharacteristicsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageSheetComponent } from './homepage-sheet.component';

describe('HomepageSheetComponent', () => {
  let component: HomepageSheetComponent;
  let fixture: ComponentFixture<HomepageSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

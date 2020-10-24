import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyEditComponent } from './loyalty-edit.component';

describe('LoyaltyEditComponent', () => {
  let component: LoyaltyEditComponent;
  let fixture: ComponentFixture<LoyaltyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoyaltyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyaltyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

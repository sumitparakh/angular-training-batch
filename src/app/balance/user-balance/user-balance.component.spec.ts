import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBalanceComponent } from './user-balance.component';

/**
 * Test cases validate our UI and/or business logic
 */
describe('UserBalanceComponent', () => {
  let component: UserBalanceComponent;
  let fixture: ComponentFixture<UserBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

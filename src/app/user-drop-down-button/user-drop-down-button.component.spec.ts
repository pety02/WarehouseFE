import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDropDownButtonComponent } from './user-drop-down-button.component';

describe('UserDropDownButtonComponent', () => {
  let component: UserDropDownButtonComponent;
  let fixture: ComponentFixture<UserDropDownButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDropDownButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDropDownButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

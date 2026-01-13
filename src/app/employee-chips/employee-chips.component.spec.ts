import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeChipsComponent } from './employee-chips.component';

describe('EmployeeChipsComponent', () => {
  let component: EmployeeChipsComponent;
  let fixture: ComponentFixture<EmployeeChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeChipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

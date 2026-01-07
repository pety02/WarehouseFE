import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthTabsViewComponent } from './auth-tabs-view.component';

describe('AuthTabsViewComponent', () => {
  let component: AuthTabsViewComponent;
  let fixture: ComponentFixture<AuthTabsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthTabsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthTabsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

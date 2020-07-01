import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPanelContentComponent } from './user-panel-content.component';

describe('UserPanelContentComponent', () => {
  let component: UserPanelContentComponent;
  let fixture: ComponentFixture<UserPanelContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPanelContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPanelContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseUserComponent } from './franchise-user.component';

describe('FranchiseUserComponent', () => {
  let component: FranchiseUserComponent;
  let fixture: ComponentFixture<FranchiseUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranchiseUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchiseUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

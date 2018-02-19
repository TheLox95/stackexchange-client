import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniOwnerComponent } from './mini-owner.component';

describe('MiniOwnerComponent', () => {
  let component: MiniOwnerComponent;
  let fixture: ComponentFixture<MiniOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

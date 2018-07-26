import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcidComponent } from './wcid.component';

describe('WcidComponent', () => {
  let component: WcidComponent;
  let fixture: ComponentFixture<WcidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

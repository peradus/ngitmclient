import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstancesPageComponent } from './instances-page.component';

describe('InstancesPageComponent', () => {
  let component: InstancesPageComponent;
  let fixture: ComponentFixture<InstancesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstancesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstancesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

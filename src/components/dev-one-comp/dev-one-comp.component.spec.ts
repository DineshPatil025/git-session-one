import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevOneCompComponent } from './dev-one-comp.component';

describe('DevOneCompComponent', () => {
  let component: DevOneCompComponent;
  let fixture: ComponentFixture<DevOneCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevOneCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevOneCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyInRightComponent } from './fly-in-right.component';

describe('FlyInRightComponent', () => {
  let component: FlyInRightComponent;
  let fixture: ComponentFixture<FlyInRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyInRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlyInRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

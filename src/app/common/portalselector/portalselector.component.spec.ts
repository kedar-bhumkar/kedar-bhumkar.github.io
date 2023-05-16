import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalselectorComponent } from './portalselector.component';

describe('PortalselectorComponent', () => {
  let component: PortalselectorComponent;
  let fixture: ComponentFixture<PortalselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalselectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

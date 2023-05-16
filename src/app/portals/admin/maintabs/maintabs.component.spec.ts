import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintabsComponent } from './maintabs.component';

describe('MaintabsComponent', () => {
  let component: MaintabsComponent;
  let fixture: ComponentFixture<MaintabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

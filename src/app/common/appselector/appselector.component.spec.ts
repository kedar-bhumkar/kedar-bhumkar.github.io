import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppselectorComponent } from './appselector.component';

describe('AppselectorComponent', () => {
  let component: AppselectorComponent;
  let fixture: ComponentFixture<AppselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppselectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

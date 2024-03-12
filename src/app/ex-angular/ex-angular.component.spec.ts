import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExAngularComponent } from './ex-angular.component';

describe('ExAngularComponent', () => {
  let component: ExAngularComponent;
  let fixture: ComponentFixture<ExAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

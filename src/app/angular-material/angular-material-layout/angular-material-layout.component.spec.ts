import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialLayoutComponent } from './angular-material-layout.component';

describe('AngularMaterialLayoutComponent', () => {
  let component: AngularMaterialLayoutComponent;
  let fixture: ComponentFixture<AngularMaterialLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularMaterialLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularMaterialLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

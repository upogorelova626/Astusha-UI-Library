import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstushaUiComponent } from './astusha-ui.component';

describe('AstushaUiComponent', () => {
  let component: AstushaUiComponent;
  let fixture: ComponentFixture<AstushaUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstushaUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstushaUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

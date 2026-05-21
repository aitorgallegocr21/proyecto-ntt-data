import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorFormulario } from './autor-formulario.component';

describe('AutorFormulario', () => {
  let component: AutorFormulario;
  let fixture: ComponentFixture<AutorFormulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorFormulario],
    }).compileComponents();

    fixture = TestBed.createComponent(AutorFormulario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

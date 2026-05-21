import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorLista } from './autor-lista';

describe('AutorLista', () => {
  let component: AutorLista;
  let fixture: ComponentFixture<AutorLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorLista],
    }).compileComponents();

    fixture = TestBed.createComponent(AutorLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

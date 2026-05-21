import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutorDetalleComponent } from './autor-detalle.component'; // Importación corregida

describe('AutorDetalleComponent', () => {
  let component: AutorDetalleComponent;
  let fixture: ComponentFixture<AutorDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorDetalleComponent], // Uso de la clase Standalone correcta
    }).compileComponents();

    fixture = TestBed.createComponent(AutorDetalleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

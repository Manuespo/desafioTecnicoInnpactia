import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReparacionService } from '../Services/reparaciones.service';

@Component({
  selector: 'app-nueva-reparacion',
  templateUrl: './nueva-reparacion.component.html',
  styleUrls: ['./nueva-reparacion.component.css']
})
export class NuevaReparacionComponent {
  telefonoId: number;
  nuevaReparacionForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private reparacionService: ReparacionService,
    private router: Router
  ) {
    this.telefonoId = 0;

    this.nuevaReparacionForm = this.formBuilder.group({
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required], // Puedes agregar un validador de fecha más específico si es necesario
      costo: ['', Validators.required],
      // Agrega más campos según tus necesidades
    });
  }

  onSubmit(): void {
    if (this.nuevaReparacionForm.valid) {
      const reparacionData = {
        ...this.nuevaReparacionForm.value,
        telefonoId: this.telefonoId
      };

      this.reparacionService.crearReparacion(reparacionData).subscribe(
        () => {
          console.log('Reparación creada exitosamente.');
          // Puedes redirigir a la página de reparaciones o realizar alguna otra acción después de la creación
          this.router.navigate(['/reparaciones', this.telefonoId]);
        },
        error => {
          console.error('Error al crear reparación:', error);
        }
      );
    }
  }
}

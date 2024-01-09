import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TelefonoService } from '../Services/telefonos.service';

@Component({
  selector: 'app-nuevo-telefono',
  templateUrl: './nuevo-telefono.component.html',
  styleUrls: ['./nuevo-telefono.component.css']
})
export class NuevoTelefonoComponent {
  clienteId: number;
  nuevoTelefonoForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private telefonoService: TelefonoService,
    private router: Router
  ) {
    this.clienteId = 0;


    this.nuevoTelefonoForm = this.formBuilder.group({
      modelo: ['', Validators.required],
      marca: ['', Validators.required],
      // Agrega más campos según tus necesidades
    });
  }

  onSubmit(): void {
    if (this.nuevoTelefonoForm.valid) {
      const telefonoData = {
        ...this.nuevoTelefonoForm.value,
        clienteId: this.clienteId
      };

      this.telefonoService.crearTelefono(telefonoData).subscribe(
        () => {
          console.log('Teléfono creado exitosamente.');
          // Puedes redirigir a la página de teléfonos o realizar alguna otra acción después de la creación
          this.router.navigate(['/telefonos', this.clienteId]);
        },
        error => {
          console.error('Error al crear teléfono:', error);
        }
      );
    }
  }

}

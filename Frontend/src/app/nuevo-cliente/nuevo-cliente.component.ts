import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../Services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent {
  nuevoClienteForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router
  ) {
    this.nuevoClienteForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.nuevoClienteForm.valid) {
      this.clienteService.crearCliente(this.nuevoClienteForm.value).subscribe(
        () => {
          console.log('Cliente creado exitosamente.');
          this.router.navigate(['/clientes']);
        },
        error => {
          console.error('Error al crear cliente:', error);
        }
      );
    }
  }

}

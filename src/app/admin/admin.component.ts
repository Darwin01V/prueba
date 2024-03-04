import { Component } from '@angular/core';
import { ListadoComponent } from '../Autores/listado/listado.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ListadoComponent],
  templateUrl: './admin.component.html',
})
export class AdminComponent {

}

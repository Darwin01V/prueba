import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoetryApiService } from '../Service/Autor.service';
import { Observable } from 'rxjs';
import {  obra } from '../Interface/autores.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-obras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obras.component.html',
})
export class ObrasComponent{
  public au:string = ''
  public obraList: obra[] = [];
  constructor(private route: ActivatedRoute,private service: PoetryApiService, private router: Router){
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.au = decodeURIComponent(params['autor']);
      this.getObra();
    });
  }

  getObra(): void {
    this.service.getWorksByAuthor(this.au).subscribe(
      (obras) => {
        this.obraList = obras;
      },
      (error) => {
        console.error('Error al obtener obras:', error);
      }
    );
  }

  onRedirect(titulo:string){
    this.router.navigate([`invitado/obra/${titulo}`]);
  }
}

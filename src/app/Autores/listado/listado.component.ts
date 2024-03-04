import { Component,OnInit } from '@angular/core';
import { PoetryApiService } from '../Service/Autor.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { autor } from '../Interface/autores.interface';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule,HttpClientModule,AsyncPipe],
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit{

  public autorList!: Observable<autor>;
  constructor(private service: PoetryApiService,private router: Router) {}

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors(): void {
    this.autorList = this.service.getAuthors()
    console.log(this.autorList)
  }

  onRedirect(autor:string){
    const encodedAutor = encodeURIComponent(autor);
    this.router.navigate([`invitado/obras/${encodedAutor}`]);
  }

}

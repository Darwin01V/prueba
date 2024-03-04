import { Component, OnInit } from '@angular/core';
import { PoetryApiService } from '../Service/Autor.service';
import { ActivatedRoute } from '@angular/router';
import { ObraTitle } from '../Interface/autores.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-obra',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obra.component.html',
})
export class ObraComponent implements OnInit{
  public title:string = ''
  public obra: ObraTitle = {
    title:'',
    author: '',
    lines:[''],
    linecount:''
  }
  constructor(private route: ActivatedRoute,
    private service: PoetryApiService)
    {}


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.title = decodeURIComponent(params['titulo']);
      this.getObra(this.title);
    });
  }

  getObra(titulo: string): void {
    this.service.getExcerptByWork(titulo).subscribe(
      (obras: ObraTitle[]) => { // Cambiar "obra: ObraTitle" a "obras: ObraTitle[]"
        if (obras.length > 0) {
          this.obra = obras[0]; // Solo toma el primer objeto de la lista de obras
        } else {
          console.error('No se encontraron obras para el título:', titulo);
        }
      },
      (error) => {
        console.error('Error al obtener la obra:', error);
      }
    );
  }
  
}

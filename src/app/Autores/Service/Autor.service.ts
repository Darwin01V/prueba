import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ObraTitle, autor, obra } from '../Interface/autores.interface';

@Injectable({
  providedIn: 'root'
})
export class PoetryApiService {
  private baseUrl = 'https://poetrydb.org';

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<autor> {
    return this.http.get<autor>(`${this.baseUrl}/author`);
  }

  getWorksByAuthor(author: string): Observable<obra[]> {
    return this.http.get<obra[]>(`${this.baseUrl}/author/${author}/title`);
  }

  getExcerptByWork(title: string): Observable<ObraTitle[]> {
    return this.http.get<ObraTitle[]>(`${this.baseUrl}/title/${title}`);
  }
}

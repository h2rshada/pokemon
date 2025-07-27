import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';

 

   public getPokemonList(): Observable<any>{

    return this.httpClient.get<any>(this.baseUrl);

  }

}

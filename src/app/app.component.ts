import { Component } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pokemonList: any;
  error: any;

  constructor(private pokemonService: PokemonService) {

  }

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe((res) => {
      if (res) {
        this.pokemonList = res.results;
        this.pokemonList.forEach((pokemon: any) => {
          pokemon.id = pokemon.url.split('/')[
            pokemon.url.split('/').length - 2
          ];
        }); 
      } else {
        this.error = ('Something went wrong')
      }    
    });
  }

  
}

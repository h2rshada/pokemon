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
  currentPage = 1;
  itemsPerPage = 20;
  totalItems = 0;

  constructor(private pokemonService: PokemonService) {

  }

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    const offset = (this.currentPage - 1) * this.itemsPerPage;
    this.pokemonService.getPokemonList(offset, this.itemsPerPage).subscribe((res) => {
      if (res) {
        this.pokemonList = res.results;
        this.totalItems =  res.count;
        this.pokemonList.forEach((pokemon: any) => {
          pokemon.id = pokemon.url.split('/')[
            pokemon.url.split('/').length - 2
          ];
        }); 
      } else {
        this.error = ('Something went wrong');
      }    
    });
  }

  onPageChange (page: any) {
    this.currentPage = page;
    this.loadPokemons();
  }

  
}

import { POKEMONS } from './../models/pokemons';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemons = POKEMONS;
  pokemon;

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
    legend: {
      display: false
    }
  };
  public radarChartLabels: Label[] = ['HP', 'こうげき', 'ぼうぎょ', 'すばやさ'];

  public radarChartData: ChartDataSets[] = [];
  public radarChartType: ChartType = 'radar';

    constructor(
      private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(map => {
      const id = +map.get('id');
      this.pokemon = this.pokemons[id - 1];
      this.radarChartData.push({
        data: [
          this.pokemon.base.HP,
          this.pokemon.base.Attack,
          this.pokemon.base.Defense,
          this.pokemon.base.Speed,
        ]
      })
    });
  }

}

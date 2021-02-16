import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes$: BehaviorSubject<Hero[]> = this.heroService.list$;
  filterStr: any;
  
  constructor(
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    this.heroService.getAll();
  }

  onChangeFilter(event: Event): void {
    this.filterStr = (event.target as HTMLInputElement).value;
  }
 

}

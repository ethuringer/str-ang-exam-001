import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private list: Hero[] = [
    {
    id: 1,
    name: 'Wonder Woman',
    superPower: 'amazon',
    address: 'Hidden Island'
    },
    {
    id: 2,
    name: 'Black Canary',
    superPower: 'detective',
    address: 'Chicago'
    },
    {
    id: 3,
    name: 'Batman',
    superPower: 'justice',
    address: 'Gotham City'
    },
    {
    id: 4,
    name: 'Aquaman',
    superPower: 'underwater breath',
    address: 'Atlantis'
    },
    {
    id: 5,
    name: 'Doctor Stranger',
    superPower: 'dimension traveller',
    address: 'New York'
    },
  ];

  list$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>(this.list);

  constructor() { }

  getAll(): void {
    this.list$.next(this.list);
  }

}

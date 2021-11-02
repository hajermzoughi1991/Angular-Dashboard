import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart(){
    return[{
      name: 'Asia',
      data: [502,635,809,947,1402,3634,5268]
    },
    {
      name: 'Africa',
      data: [106,106,222,144,221,3634,5268]
    },
    {
      name: 'Europe',
      data: [502,635,809,947,1402,3634,5268]
    },
    {
      name: 'America',
      data: [502,635,809,947,1402,3634,5268]
    },
    {
      name: 'Oceania',
      data: [502,635,809,947,1402,3634,5268]
    },
  ]
  }
}

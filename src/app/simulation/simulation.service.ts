import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { api } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  constructor(public http: Http) { }

  addDepartment1(data) {
    return this.http.post(api.url + '/api-simulation/addDp1', data).pipe(map(res => res.json()));
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { api } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Menu1Service {

  constructor(public http: Http) { }

  showMenu1_aging() {
    return this.http.get(api.url + '/api-menu1/show/menu1/aging').pipe(map(res => res.json()));
  }

  showMenu1_setWeight() {
    return this.http.get(api.url + '/api-menu1/show/menu1/set-weight').pipe(map(res => res.json()));
  }

  // updateStatus(key, data) {
  //   return this.http.post(api.url + '/api/update/' + key, data).pipe(map(res => res.json()));
  // }
}

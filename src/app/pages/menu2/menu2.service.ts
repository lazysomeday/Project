import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { api } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Menu2Service {

  constructor(public http: Http) { }

  showMenu2_importD1Type1() {
    return this.http.get(api.url + '/api-menu2/show/menu2/import-d1/d1-type1').pipe(map(res => res.json()));
  }
}

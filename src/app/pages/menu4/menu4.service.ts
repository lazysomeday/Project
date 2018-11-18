import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { api } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Menu4Service {

  constructor(public http: Http) { }

  showMenu4_store_t1() {      /* Query ตารางหน้า /store-t1 */
    return this.http.get(api.url + '/api-menu4/show/menu4/store-t1').pipe(map(res => res.json()));
  }

  editMenu4_store_t1(key, data) {
    return this.http.post(api.url + '/api-menu4/edit/menu4/store-t1/' + key, data).pipe(map(res => res.json()));
  }

  removeMenu4_store_t1(key) {
    return this.http.delete(api.url + '/api-menu4/remove/menu4/store-t1/' + key).pipe(map(res => res.json()));
  }

  /* Filter ของ store-t1 */
  filter1(t1) {
    return this.http.get(api.url + '/api-menu4/filter1/' + t1).pipe(map(res => res.json()));
  }
  filter2(t1) {
    return this.http.get(api.url + '/api-menu4/filter2/' + t1).pipe(map(res => res.json()));
  }
  filter3(t1) {
    return this.http.get(api.url + '/api-menu4/filter3/' + t1).pipe(map(res => res.json()));
  }
  filter4(t1) {
    return this.http.get(api.url + '/api-menu4/filter4/' + t1).pipe(map(res => res.json()));
  }
}

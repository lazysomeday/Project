import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { api } from '../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: Http) { }

  addMenu1_aging(data) {
    return this.http.post(api.url + '/api-menu1/add/menu1/aging', data).pipe(map(res => res.json()));
  }

  addMenu1_setweight(data) {
    return this.http.post(api.url + '/api-menu1/add/menu1/set-weight', data).pipe(map(res => res.json()));
  }

  addMenu2_importD1Type1(data) {
    return this.http.post(api.url + '/api-menu2/add/menu2/import-d1/d1-type1', data).pipe(map(res => res.json()));
  }






  addMenu4_store(data) {
    return this.http.post(api.url + '/api-menu4/add/menu4/store-t1', data).pipe(map(res => res.json()));
  }

  settingStatusMember() {
    return this.http.get(api.url + '/api/showUsers').pipe(map(res => res.json()));
  }

  editStatusMember(key, data) {
    return this.http.post(api.url + '/api/setting/edit-status/' + key, data).pipe(map(res => res.json()));
  }
}

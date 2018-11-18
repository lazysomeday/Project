import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { api } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }

  registerMember(data) {
    return this.http.post(api.url + '/api/register', data).pipe(map(res => res.json()));
  }

  showMember() {
    return this.http.get(api.url + '/api/show/user').pipe(map(res => res.json()));
  }

  editData(key, data) {
    return this.http.post(api.url + '/api/edit/' + key, data).pipe(map(res => res.json()));
  }

  showMemberByEmail(email) {
    return this.http.get(api.url + '/api/show/user/' + email).pipe(map(res => res.json()));
  }
}
